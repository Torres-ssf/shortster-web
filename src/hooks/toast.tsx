import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 } from 'uuid';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = v4();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages(oldState => [...oldState, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(oldState => oldState.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextData => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};
