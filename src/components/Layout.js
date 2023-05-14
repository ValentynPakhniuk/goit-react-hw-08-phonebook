import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { ContainerLayout } from './Container.styled';

export const Layout = () => {
  return (
    <ContainerLayout>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </ContainerLayout>
  );
};
