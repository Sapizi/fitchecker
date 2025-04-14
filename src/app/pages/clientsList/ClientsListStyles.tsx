import styled from "styled-components";
export const ClientList = styled.ul`
    margin-top: 20px;
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const ClientItem = styled.li`
    border: 2px solid #000;
    border-radius: 10px;
    padding: 15px;
    background-color: #f9f9f9;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ClientInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const ClientText = styled.p`
    font-size: 18px;
    margin: 0;
`;

export const LoadingText = styled.p`
    font-size: 24px;
    text-align: center;
    color: #666;
`;

export const ErrorText = styled.p`
    font-size: 18px;
    text-align: center;
    color: red;
`;
export const Button = styled.button`
    padding: 8px 16px;
    margin-left: 10px;
    background-color: #e97c00;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #d16b00;
    }
`;

export const EditForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

export const EditInput = styled.input`
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const EditSelect = styled.select`
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
`;
export const DeleteButton = styled(Button)`
    background-color: #ff4d4d;

    &:hover {
        background-color: #e60000;
    }
`;