'use client';
import { useState, useEffect } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import Header from "@/app/components/header/Header";
import { supabase } from '../../lib/supbase';
import {
    ClientList,
    ClientItem,
    ClientInfo,
    ClientText,
    LoadingText,
    ErrorText,
    Button,
    DeleteButton,
    EditForm,
    EditInput,
    EditSelect,
    ButtonGroup,
} from './ClientsListStyles';
import { Wrapper } from '@/app/GlobalStyles';
import { Title } from '../mainPage/MainStyles';
import Link from 'next/link';

type Client = {
    id: number;
    created_at: string;
    name: string;
    sex: string;
    age: number;
    subscription: string;
};

const ClientsPage = () => {
    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [editingClientId, setEditingClientId] = useState<number | null>(null);
    const [editFormData, setEditFormData] = useState<Client | null>(null);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from('clients')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) {
                    throw error;
                }

                setClients(data as Client[]);
            } catch (error) {
                setError(`Ошибка при загрузке клиентов: ${(error as PostgrestError).message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchClients();
    }, []);

    const handleEdit = (client: Client) => {
        setEditingClientId(client.id);
        setEditFormData({ ...client });
    };

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEditFormData((prev) => (prev ? { ...prev, [name]: value } : null));
    };
    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editFormData) return;

        const age = parseInt(String(editFormData.age), 10);
        if (isNaN(age) || age <= 0) {
            setError('Возраст должен быть положительным числом.');
            return;
        }

        try {
            const { error } = await supabase
                .from('clients')
                .update({
                    name: editFormData.name,
                    sex: editFormData.sex,
                    age: age,
                    subscription: editFormData.subscription,
                })
                .eq('id', editFormData.id);

            if (error) {
                throw error;
            }

            setClients((prev) =>
                prev.map((client) =>
                    client.id === editFormData.id ? { ...client, ...editFormData, age } : client
                )
            );
            setEditingClientId(null);
            setEditFormData(null);
        } catch (error) {
            setError(`Ошибка при обновлении клиента: ${(error as PostgrestError).message}`);
        }
    };


    const handleCancel = () => {
        setEditingClientId(null);
        setEditFormData(null);
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Вы уверены, что хотите удалить этого клиента?')) return;

        try {
            const { error } = await supabase
                .from('clients')
                .delete()
                .eq('id', id);

            if (error) {
                throw error;
            }

            setClients((prev) => prev.filter((client) => client.id !== id));
        } catch (error) {
            setError(`Ошибка при удалении клиента: ${(error as PostgrestError).message}`);
        }
    };

    return (
        <>
            <Header />
            <Wrapper>
                <Link href={'/pages/mainPage'}>На главную</Link>
                <Title>Список клиентов</Title>
                {loading && <LoadingText>Загрузка...</LoadingText>}
                {error && <ErrorText>{error}</ErrorText>}

                {!loading && !error && (
                    <ClientList>
                        {clients.length === 0 ? (
                            <ClientText>Клиентов пока нет.</ClientText>
                        ) : (
                            clients.map((client) => (
                                <ClientItem key={client.id}>
                                    {editingClientId === client.id ? (
                                        // Форма редактирования
                                        <EditForm onSubmit={handleSave}>
                                            <EditInput
                                                type="text"
                                                name="name"
                                                value={editFormData?.name || ''}
                                                onChange={handleEditChange}
                                                placeholder="ФИО"
                                            />
                                            <EditSelect
                                                name="sex"
                                                value={editFormData?.sex || 'male'}
                                                onChange={handleEditChange}
                                            >
                                                <option value="male">Мужской</option>
                                                <option value="female">Женский</option>
                                            </EditSelect>
                                            <EditInput
                                                type="number"
                                                name="age"
                                                value={editFormData?.age || ''}
                                                onChange={handleEditChange}
                                                placeholder="Возраст"
                                            />
                                            <EditSelect
                                                name="subscription"
                                                value={editFormData?.subscription || 'monthly'}
                                                onChange={handleEditChange}
                                            >
                                                <option value="monthly">Месячный</option>
                                                <option value="quarterly">Квартальный</option>
                                                <option value="yearly">Годовой</option>
                                            </EditSelect>
                                            <ButtonGroup>
                                                <Button type="submit">Сохранить</Button>
                                                <Button type="button" onClick={handleCancel}>Отмена</Button>
                                            </ButtonGroup>
                                        </EditForm>
                                    ) : (
                                        // Отображение данных клиента
                                        <>
                                            <ClientInfo>
                                                <ClientText><strong>ФИО:</strong> {client.name}</ClientText>
                                                <ClientText><strong>Пол:</strong> {client.sex === 'male' ? 'Мужской' : 'Женский'}</ClientText>
                                                <ClientText><strong>Возраст:</strong> {client.age}</ClientText>
                                                <ClientText><strong>Абонемент:</strong> 
                                                    {client.subscription === 'monthly' ? 'Месячный' : 
                                                     client.subscription === 'quarterly' ? 'Квартальный' : 'Годовой'}
                                                </ClientText>
                                                <ClientText><strong>Дата добавления:</strong> {new Date(client.created_at).toLocaleString('ru-RU')}</ClientText>
                                            </ClientInfo>
                                            <div>
                                                <Button onClick={() => handleEdit(client)}>Редактировать</Button>
                                                <DeleteButton onClick={() => handleDelete(client.id)}>Удалить</DeleteButton>
                                            </div>
                                        </>
                                    )}
                                </ClientItem>
                            ))
                        )}
                    </ClientList>
                )}
            </Wrapper>
        </>
    );
};

export default ClientsPage;