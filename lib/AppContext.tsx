import { useContext, createContext, useState, ReactNode } from 'react';
import { Document, User } from '@prisma/client';
import {
  useLoginMutation,
  useRegisterMutation,
  useAddDocumentMutation,
} from '../graphql';

type AuthData = { email: string; password: string };

type FormError = AuthData;

type ModelType<T = Omit<User, 'password'>> = Partial<{
  [P in keyof T]: T[P] | null | undefined;
}>;

type AppContextType = {
  user?: ModelType | null;
  documents: any[];
  helpers: {
    login: (d: AuthData) => Promise<any | FormError>;
    register: (d: AuthData) => Promise<any | FormError>;
    logout: () => void;
    addDocument: () => void;
    // removeDocument: () => void;
  };
};

const AppContext = createContext<AppContextType>({} as AppContextType);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<ModelType | null>();
  const [documents, setDocuments] = useState<ModelType<Document>[]>([]);
  const [_login] = useLoginMutation();
  const [_register] = useRegisterMutation();
  const [_docAdd] = useAddDocumentMutation();

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

  const addDocument = async () => {
    const userId = user?.id;

    if (userId) {
      const response = await _docAdd({ variables: { userId } });
      if (response.data && response.data.addDocument) {
        setDocuments(documents.concat(response.data.addDocument));
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        documents,
        helpers: { login, register, logout, addDocument },
      }}
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
