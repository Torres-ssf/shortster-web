import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './hooks';
import { Routes } from './routes';
import { GlobalStyles } from './styles/global';

export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Routes />
        </AppProvider>
      </BrowserRouter>

      <GlobalStyles />
    </>
  );
};
