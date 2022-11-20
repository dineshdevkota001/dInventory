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
export const RegularInventoryFragmentDoc = gql`
  fragment RegularInventory on Inventory {
    id
    name
    description
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
  mutation CreateAddress($data: AddressCreateInput!) {
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
export const CreateInventoryDocument = gql`
  mutation CreateInventory($data: InventoryCreateInput!) {
    createInventory(data: $data) {
      ...RegularInventory
    }
  }
  ${RegularInventoryFragmentDoc}
`;

export function useCreateInventoryMutation() {
  return Urql.useMutation<
    ICreateInventoryMutation,
    ICreateInventoryMutationVariables
  >(CreateInventoryDocument);
}
export const DeleteAddressDocument = gql`
  mutation DeleteAddress($where: AddressWhereUniqueInput!) {
    deleteAddress(where: $where) {
      ...RegularAddress
    }
  }
  ${RegularAddressFragmentDoc}
`;

export function useDeleteAddressMutation() {
  return Urql.useMutation<
    IDeleteAddressMutation,
    IDeleteAddressMutationVariables
  >(DeleteAddressDocument);
}
export const DeleteUserDocument = gql`
  mutation DeleteUser($where: UserWhereUniqueInput!) {
    deleteUser(where: $where) {
      ...RegularUser
    }
  }
  ${RegularUserFragmentDoc}
`;

export function useDeleteUserMutation() {
  return Urql.useMutation<IDeleteUserMutation, IDeleteUserMutationVariables>(
    DeleteUserDocument,
  );
}
export const DeleteInventoryDocument = gql`
  mutation DeleteInventory($where: InventoryWhereUniqueInput!) {
    deleteInventory(where: $where) {
      ...RegularInventory
    }
  }
  ${RegularInventoryFragmentDoc}
`;

export function useDeleteInventoryMutation() {
  return Urql.useMutation<
    IDeleteInventoryMutation,
    IDeleteInventoryMutationVariables
  >(DeleteInventoryDocument);
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
export const UsersDocument = gql`
  query Users {
    users {
      items {
        ...RegularUser
      }
      pageInfo {
        ...RegularPageInfo
      }
    }
  }
  ${RegularUserFragmentDoc}
  ${RegularPageInfoFragmentDoc}
`;

export function useUsersQuery(
  options?: Omit<Urql.UseQueryArgs<IUsersQueryVariables>, 'query'>,
) {
  return Urql.useQuery<IUsersQuery, IUsersQueryVariables>({
    query: UsersDocument,
    ...options,
  });
}
export const InventoriesDocument = gql`
  query Inventories {
    inventories {
      items {
        ...RegularInventory
      }
      pageInfo {
        ...RegularPageInfo
      }
    }
  }
  ${RegularInventoryFragmentDoc}
  ${RegularPageInfoFragmentDoc}
`;

export function useInventoriesQuery(
  options?: Omit<Urql.UseQueryArgs<IInventoriesQueryVariables>, 'query'>,
) {
  return Urql.useQuery<IInventoriesQuery, IInventoriesQueryVariables>({
    query: InventoriesDocument,
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
export const UserDocument = gql`
  query User($where: UserWhereUniqueInput) {
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
export const AddressDocument = gql`
  query Address($where: AddressWhereUniqueInput) {
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
export const InventoryDocument = gql`
  query Inventory($where: InventoryWhereUniqueInput) {
    inventory(where: $where) {
      ...RegularInventory
    }
  }
  ${RegularInventoryFragmentDoc}
`;

export function useInventoryQuery(
  options?: Omit<Urql.UseQueryArgs<IInventoryQueryVariables>, 'query'>,
) {
  return Urql.useQuery<IInventoryQuery, IInventoryQueryVariables>({
    query: InventoryDocument,
    ...options,
  });
}
