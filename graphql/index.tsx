import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Document = {
  __typename?: 'Document';
  id?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addDocument?: Maybe<Document>;
  login?: Maybe<User>;
  register?: Maybe<User>;
  removeDocument?: Maybe<Document>;
};


export type MutationAddDocumentArgs = {
  name: Scalars['String'];
  userId: Scalars['Int'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRemoveDocumentArgs = {
  id: Scalars['String'];
  userId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getDocuments?: Maybe<Array<Maybe<Document>>>;
  hello?: Maybe<Scalars['String']>;
  verify?: Maybe<Scalars['Boolean']>;
};


export type QueryGetDocumentsArgs = {
  userId: Scalars['Int'];
};


export type QueryVerifyArgs = {
  msgHash: Scalars['String'];
  pubKey: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  pubkey?: Maybe<Scalars['String']>;
};

export type AddDocumentMutationVariables = Exact<{
  userId: Scalars['Int'];
  name: Scalars['String'];
}>;


export type AddDocumentMutation = { __typename?: 'Mutation', addDocument?: { __typename?: 'Document', id?: string | null, userId?: number | null, signature?: string | null } | null };

export type GetDocumentsQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type GetDocumentsQuery = { __typename?: 'Query', getDocuments?: Array<{ __typename?: 'Document', id?: string | null, userId?: number | null, signature?: string | null } | null> | null };

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello?: string | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'User', id?: number | null, email?: string | null, pubkey?: string | null } | null };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'User', id?: number | null, email?: string | null, pubkey?: string | null } | null };

export type RemoveDocumentMutationVariables = Exact<{
  id: Scalars['String'];
  userId: Scalars['Int'];
}>;


export type RemoveDocumentMutation = { __typename?: 'Mutation', removeDocument?: { __typename?: 'Document', id?: string | null, userId?: number | null } | null };

export type VerifyQueryVariables = Exact<{
  pubKey: Scalars['String'];
  msgHash: Scalars['String'];
}>;


export type VerifyQuery = { __typename?: 'Query', verify?: boolean | null };


export const AddDocumentDocument = gql`
    mutation AddDocument($userId: Int!, $name: String!) {
  addDocument(userId: $userId, name: $name) {
    id
    userId
    signature
  }
}
    `;
export type AddDocumentMutationFn = Apollo.MutationFunction<AddDocumentMutation, AddDocumentMutationVariables>;

/**
 * __useAddDocumentMutation__
 *
 * To run a mutation, you first call `useAddDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addDocumentMutation, { data, loading, error }] = useAddDocumentMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useAddDocumentMutation(baseOptions?: Apollo.MutationHookOptions<AddDocumentMutation, AddDocumentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddDocumentMutation, AddDocumentMutationVariables>(AddDocumentDocument, options);
      }
export type AddDocumentMutationHookResult = ReturnType<typeof useAddDocumentMutation>;
export type AddDocumentMutationResult = Apollo.MutationResult<AddDocumentMutation>;
export type AddDocumentMutationOptions = Apollo.BaseMutationOptions<AddDocumentMutation, AddDocumentMutationVariables>;
export const GetDocumentsDocument = gql`
    query GetDocuments($userId: Int!) {
  getDocuments(userId: $userId) {
    id
    userId
    signature
  }
}
    `;

/**
 * __useGetDocumentsQuery__
 *
 * To run a query within a React component, call `useGetDocumentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDocumentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDocumentsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetDocumentsQuery(baseOptions: Apollo.QueryHookOptions<GetDocumentsQuery, GetDocumentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDocumentsQuery, GetDocumentsQueryVariables>(GetDocumentsDocument, options);
      }
export function useGetDocumentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDocumentsQuery, GetDocumentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDocumentsQuery, GetDocumentsQueryVariables>(GetDocumentsDocument, options);
        }
export type GetDocumentsQueryHookResult = ReturnType<typeof useGetDocumentsQuery>;
export type GetDocumentsLazyQueryHookResult = ReturnType<typeof useGetDocumentsLazyQuery>;
export type GetDocumentsQueryResult = Apollo.QueryResult<GetDocumentsQuery, GetDocumentsQueryVariables>;
export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    id
    email
    pubkey
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!) {
  register(email: $email, password: $password) {
    id
    email
    pubkey
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const RemoveDocumentDocument = gql`
    mutation RemoveDocument($id: String!, $userId: Int!) {
  removeDocument(id: $id, userId: $userId) {
    id
    userId
  }
}
    `;
export type RemoveDocumentMutationFn = Apollo.MutationFunction<RemoveDocumentMutation, RemoveDocumentMutationVariables>;

/**
 * __useRemoveDocumentMutation__
 *
 * To run a mutation, you first call `useRemoveDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeDocumentMutation, { data, loading, error }] = useRemoveDocumentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRemoveDocumentMutation(baseOptions?: Apollo.MutationHookOptions<RemoveDocumentMutation, RemoveDocumentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveDocumentMutation, RemoveDocumentMutationVariables>(RemoveDocumentDocument, options);
      }
export type RemoveDocumentMutationHookResult = ReturnType<typeof useRemoveDocumentMutation>;
export type RemoveDocumentMutationResult = Apollo.MutationResult<RemoveDocumentMutation>;
export type RemoveDocumentMutationOptions = Apollo.BaseMutationOptions<RemoveDocumentMutation, RemoveDocumentMutationVariables>;
export const VerifyDocument = gql`
    query Verify($pubKey: String!, $msgHash: String!) {
  verify(pubKey: $pubKey, msgHash: $msgHash)
}
    `;

/**
 * __useVerifyQuery__
 *
 * To run a query within a React component, call `useVerifyQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyQuery({
 *   variables: {
 *      pubKey: // value for 'pubKey'
 *      msgHash: // value for 'msgHash'
 *   },
 * });
 */
export function useVerifyQuery(baseOptions: Apollo.QueryHookOptions<VerifyQuery, VerifyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VerifyQuery, VerifyQueryVariables>(VerifyDocument, options);
      }
export function useVerifyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VerifyQuery, VerifyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VerifyQuery, VerifyQueryVariables>(VerifyDocument, options);
        }
export type VerifyQueryHookResult = ReturnType<typeof useVerifyQuery>;
export type VerifyLazyQueryHookResult = ReturnType<typeof useVerifyLazyQuery>;
export type VerifyQueryResult = Apollo.QueryResult<VerifyQuery, VerifyQueryVariables>;