'use client';
import { Toast, ToastMessage } from 'primereact/toast';
import { ReactNode, createContext, useContext, useRef } from 'react';

interface ToastContextType {
  showToast: (options: ToastMessage | ToastMessage[]) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const toastRef = useRef<Toast>(null);

  const showToast = (options: ToastMessage | ToastMessage[]) => {
    if (toastRef.current) {
      toastRef.current.show(options);
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast ref={toastRef} />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
