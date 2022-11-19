import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export const MinimalAddressFragmentDoc = gql`
  fragment MinimalAddress on Address {
    id
    city
    tole
  }
`;
export const RegularPageInfoFragmentDoc = gql`
  fragment RegularPageInfo on PageInfo {
    endCursor
    hasNextPage
  }
`;
export const RegularAddressFragmentDoc = gql`
  fragment RegularAddress on Address {
    id
    ward
    tole
    createdOn
    country
    city
    district
  }
`;
export const RegularUserFragmentDoc = gql`
  fragment RegularUser on User {
    id
    address {
      ...RegularAddress
    }
    balance
    name
    email
    institution
    description
  }
  ${RegularAddressFragmentDoc}
`;
export const CreateAddressDocument = gql`
  mutation CreateAddress($data: AddressCreateInput) {
    createAddress(data: $data) {
      ...RegularAddress
    }
  }
  ${RegularAddressFragmentDoc}
`;

export function useCreateAddressMutation() {
  return Urql.useMutation<
    ICreateAddressMutation,
    ICreateAddressMutationVariables
  >(CreateAddressDocument);
}
export const RemoveAddressDocument = gql`
  mutation removeAddress($where: IdWhereUniqueInput!) {
    removeAddress(where: $where) {
      ...RegularAddress
    }
  }
  ${RegularAddressFragmentDoc}
`;

export function useRemoveAddressMutation() {
  return Urql.useMutation<
    IRemoveAddressMutation,
    IRemoveAddressMutationVariables
  >(RemoveAddressDocument);
}
export const CreateUserDocument = gql`
  mutation CreateUser($data: UserCreateInput!) {
    createUser(data: $data) {
      ...RegularUser
    }
  }
  ${RegularUserFragmentDoc}
`;

export function useCreateUserMutation() {
  return Urql.useMutation<ICreateUserMutation, ICreateUserMutationVariables>(
    CreateUserDocument,
  );
}
export const RemoveUserDocument = gql`
  mutation removeUser($where: IdWhereUniqueInput!) {
    removeUser(where: $where) {
      ...RegularUser
    }
  }
  ${RegularUserFragmentDoc}
`;

export function useRemoveUserMutation() {
  return Urql.useMutation<IRemoveUserMutation, IRemoveUserMutationVariables>(
    RemoveUserDocument,
  );
}
export const AddressesDocument = gql`
  query Addresses {
    addresses {
      items {
        ...RegularAddress
      }
      pageInfo {
        ...RegularPageInfo
      }
    }
  }
  ${RegularAddressFragmentDoc}
  ${RegularPageInfoFragmentDoc}
`;

export function useAddressesQuery(
  options?: Omit<Urql.UseQueryArgs<IAddressesQueryVariables>, 'query'>,
) {
  return Urql.useQuery<IAddressesQuery, IAddressesQueryVariables>({
    query: AddressesDocument,
    ...options,
  });
}
export const MinimalAddressesDocument = gql`
  query MinimalAddresses {
    addresses {
      items {
        ...MinimalAddress
      }
      pageInfo {
        ...RegularPageInfo
      }
    }
  }
  ${MinimalAddressFragmentDoc}
  ${RegularPageInfoFragmentDoc}
`;

export function useMinimalAddressesQuery(
  options?: Omit<Urql.UseQueryArgs<IMinimalAddressesQueryVariables>, 'query'>,
) {
  return Urql.useQuery<IMinimalAddressesQuery, IMinimalAddressesQueryVariables>(
    { query: MinimalAddressesDocument, ...options },
  );
}
export const AddressDocument = gql`
  query Address($where: IdWhereUniqueInput) {
    address(where: $where) {
      ...RegularAddress
    }
  }
  ${RegularAddressFragmentDoc}
`;

export function useAddressQuery(
  options?: Omit<Urql.UseQueryArgs<IAddressQueryVariables>, 'query'>,
) {
  return Urql.useQuery<IAddressQuery, IAddressQueryVariables>({
    query: AddressDocument,
    ...options,
  });
}
export const UsersDocument = gql`
  query Users {
    users {
      items {
        ...RegularUser
      }
    }
  }
  ${RegularUserFragmentDoc}
`;

export function useUsersQuery(
  options?: Omit<Urql.UseQueryArgs<IUsersQueryVariables>, 'query'>,
) {
  return Urql.useQuery<IUsersQuery, IUsersQueryVariables>({
    query: UsersDocument,
    ...options,
  });
}
export const UserDocument = gql`
  query User($where: IdWhereUniqueInput) {
    user(where: $where) {
      ...RegularUser
    }
  }
  ${RegularUserFragmentDoc}
`;

export function useUserQuery(
  options?: Omit<Urql.UseQueryArgs<IUserQueryVariables>, 'query'>,
) {
  return Urql.useQuery<IUserQuery, IUserQueryVariables>({
    query: UserDocument,
    ...options,
  });
}
