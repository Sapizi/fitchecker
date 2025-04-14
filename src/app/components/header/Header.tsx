'use client'; 
import { HeaderContainer, HeaderLogo, LogoutButton } from "./HeaderStyles";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
const Header = () => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
        const isClientLoggedIn = localStorage.getItem('isClientLoggedIn') === 'true';
        setIsAuthenticated(isAdminLoggedIn || isClientLoggedIn);
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('isAdminLoggedIn');
        localStorage.removeItem('isClientLoggedIn');
        router.push('/');
    };
    return (
        <HeaderContainer>
            <HeaderLogo>
                FitChecker
            </HeaderLogo>
            {isAuthenticated && (
                <LogoutButton onClick={handleLogout}>
                    Выйти
                </LogoutButton>
            )}
        </HeaderContainer>
    );
};

export default Header;