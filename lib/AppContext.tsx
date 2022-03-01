import { useContext, createContext, useState, ReactNode } from 'react';
import { User } from '@prisma/client';
import { useLoginMutation, useRegisterMutation } from '../graphql';

type AuthData = { email: string; password: string };

type FormError = AuthData;

type UserType<T = Partial<Omit<User, 'password'>>> = {
  [P in keyof T]: T[P] | null;
};

type AppContextType = {
  user?: UserType | null;
  documents: any[];
  helpers: {
    login: (d: AuthData) => Promise<any | FormError>;
    register: (d: AuthData) => Promise<any | FormError>;
    logout: () => void;
    // addDocument: () => void;
    // removeDocument: () => void;
  };
};

const AppContext = createContext<AppContextType>({} as AppContextType);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [documents, setDocuments] = useState<any[]>([]);
  const [_login] = useLoginMutation();
  const [_register] = useRegisterMutation();

  const login = async (variables: AuthData) => {
    const response = await _login({ variables });
    setUser(response.data?.login);
    return !user ? 'Invalid credentials!' : 'success';
  };

  const register = async (variables: AuthData) => {
    const response = await _register({ variables });
    setUser(response.data?.register);
    return !user ? {} : 'success';
  };

  const logout = () => setUser(undefined);

  return (
    <AppContext.Provider
      value={{ user, documents, helpers: { login, register, logout } }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an ContextProvider');
  }

  return context;
};

export default useAppContext;
