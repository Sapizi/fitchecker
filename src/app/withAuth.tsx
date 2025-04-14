'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const withAuth = (WrappedComponent: React.ComponentType, isAdminRoute = false) => {
  return function ProtectedRoute(props: any) {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = () => {
        const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
        const isClientLoggedIn = localStorage.getItem('isClientLoggedIn') === 'true';
        
        if (!isAdminLoggedIn && !isClientLoggedIn) {
          router.push('/');
          return;
        }

        if (isAdminRoute && !isAdminLoggedIn) {
          router.push('/');
        }
      };

      checkAuth();
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};