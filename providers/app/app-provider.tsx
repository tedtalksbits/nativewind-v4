import { AuthProvider } from '../auth/auth-provider';
import { ToastProvider } from '../toaster/toaster';
import { AppProviderProps } from './types';

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};
