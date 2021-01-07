import React from 'react';

import { ToastProvider } from './toast';

export const AppProvider: React.FC = ({ children }) => {
  return <ToastProvider>{children}</ToastProvider>;
};
