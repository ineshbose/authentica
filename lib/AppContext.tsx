import React, { useContext, createContext, useState, ReactNode } from 'react';
import { Document, User } from '@prisma/client';
import {
  useLoginMutation,
  useRegisterMutation,
  useAddDocumentMutation,
  useRemoveDocumentMutation,
  useGetDocumentsLazyQuery,
} from '../graphql';

type AuthData = { email: string; password: string };

type FormError = AuthData;

type ModelType<T = Omit<User, 'password'>> = Partial<{
  [P in keyof T]: T[P] | null | undefined;
}>;

type AppContextType = {
  user?: ModelType | null;
  documents?: ModelType<Document>[] | null;
  helpers: {
    login: (d: AuthData) => Promise<any | FormError>;
    register: (d: AuthData) => Promise<any | FormError>;
    logout: () => void;
    addDocument: (n: string) => void;
    removeDocument: (d: string) => void;
  };
};

const AppContext = createContext<AppContextType>({} as AppContextType);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<ModelType | null>();
  const [documents, setDocuments] = useState<ModelType<Document>[]>();
  const [_login] = useLoginMutation();
  const [_register] = useRegisterMutation();
  const [_docAdd] = useAddDocumentMutation();
  const [_docRemove] = useRemoveDocumentMutation();
  const [_getDoc] = useGetDocumentsLazyQuery();

  const getDocuments = async (forUser?: ModelType | null) => {
    const userId = forUser?.id || user?.id;
    if (userId && !documents) {
      const response = await _getDoc({ variables: { userId } });
      console.log(response.data);
      if (response.data && response.data.getDocuments) {
        console.log(response.data);
        setDocuments(response.data.getDocuments.filter((d) => d) as Document[]);
      }
    }
  };

  const login = async (variables: AuthData) => {
    const response = await _login({ variables });
    setUser(response.data?.login);
    getDocuments(response.data?.login);
    return !user ? 'Invalid credentials!' : 'success';
  };

  const register = async (variables: AuthData) => {
    const response = await _register({ variables });
    setUser(response.data?.register);
    setDocuments([]);
    return !user ? {} : 'success';
  };

  const logout = () => setUser(undefined);

  const addDocument = async (name: string) => {
    const userId = user?.id;

    if (userId) {
      const response = await _docAdd({ variables: { userId, name } });
      if (response.data && response.data.addDocument) {
        setDocuments((documents || []).concat(response.data.addDocument));
      }
    }
  };

  const removeDocument = async (docId: string) => {
    const userId = user?.id;

    if (docId && userId) {
      const response = await _docRemove({ variables: { id: docId, userId } });
      if (response.data && response.data.removeDocument) {
        setDocuments(
          (documents || []).filter((document) => document.id !== docId)
        );
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        documents,
        helpers: {
          login,
          register,
          logout,
          addDocument,
          removeDocument,
        },
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
