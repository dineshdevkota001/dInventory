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
export const RegularProductFragmentDoc = gql`
  fragment RegularProduct on Product {
    id
    name
    type
    imageUrl
    description
  }
`;
export const MinimalProductFragmentDoc = gql`
  fragment MinimalProduct on Product {
    id
    name
  }
`;
export const RegularItemFragmentDoc = gql`
  fragment RegularItem on Item {
    id
    packing
    productId
    unitType
    unitNumber
    buyPrice
    wholesalePrice
    sellPrice
  }
`;
export const MinimalItemFragmentDoc = gql`
  fragment MinimalItem on Item {
    id
    packing
    product {
      id
      name
    }
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
  query Addresses($after: String, $first: Int) {
    addresses(after: $after, first: $first) {
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
  query Users($after: String, $first: Int) {
    users(after: $after, first: $first) {
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
  query Inventories($after: String, $first: Int) {
    inventories(after: $after, first: $first) {
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
export const ProductsDocument = gql`
  query Products($after: String, $first: Int) {
    products(after: $after, first: $first) {
      items {
        ...RegularProduct
      }
      pageInfo {
        ...RegularPageInfo
      }
    }
  }
  ${RegularProductFragmentDoc}
  ${RegularPageInfoFragmentDoc}
`;

export function useProductsQuery(
  options?: Omit<Urql.UseQueryArgs<IProductsQueryVariables>, 'query'>,
) {
  return Urql.useQuery<IProductsQuery, IProductsQueryVariables>({
    query: ProductsDocument,
    ...options,
  });
}
export const ItemsDocument = gql`
  query Items($after: String, $first: Int) {
    items(after: $after, first: $first) {
      items {
        ...RegularItem
      }
      pageInfo {
        ...RegularPageInfo
      }
    }
  }
  ${RegularItemFragmentDoc}
  ${RegularPageInfoFragmentDoc}
`;

export function useItemsQuery(
  options?: Omit<Urql.UseQueryArgs<IItemsQueryVariables>, 'query'>,
) {
  return Urql.useQuery<IItemsQuery, IItemsQueryVariables>({
    query: ItemsDocument,
    ...options,
  });
}
export const MinimalAddressesDocument = gql`
  query MinimalAddresses {
    addresses {
      items {
        ...MinimalAddress
      }
    }
  }
  ${MinimalAddressFragmentDoc}
`;

export function useMinimalAddressesQuery(
  options?: Omit<Urql.UseQueryArgs<IMinimalAddressesQueryVariables>, 'query'>,
) {
  return Urql.useQuery<IMinimalAddressesQuery, IMinimalAddressesQueryVariables>(
    { query: MinimalAddressesDocument, ...options },
  );
}
export const MinimalProductsDocument = gql`
  query MinimalProducts {
    products {
      items {
        ...MinimalProduct
      }
    }
  }
  ${MinimalProductFragmentDoc}
`;

export function useMinimalProductsQuery(
  options?: Omit<Urql.UseQueryArgs<IMinimalProductsQueryVariables>, 'query'>,
) {
  return Urql.useQuery<IMinimalProductsQuery, IMinimalProductsQueryVariables>({
    query: MinimalProductsDocument,
    ...options,
  });
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
export const ProductDocument = gql`
  query Product($where: ProductWhereUniqueInput) {
    product(where: $where) {
      ...RegularProduct
    }
  }
  ${RegularProductFragmentDoc}
`;

export function useProductQuery(
  options?: Omit<Urql.UseQueryArgs<IProductQueryVariables>, 'query'>,
) {
  return Urql.useQuery<IProductQuery, IProductQueryVariables>({
    query: ProductDocument,
    ...options,
  });
}
export const ItemDocument = gql`
  query Item($where: ItemWhereUniqueInput) {
    item(where: $where) {
      ...RegularItem
    }
  }
  ${RegularItemFragmentDoc}
`;

export function useItemQuery(
  options?: Omit<Urql.UseQueryArgs<IItemQueryVariables>, 'query'>,
) {
  return Urql.useQuery<IItemQuery, IItemQueryVariables>({
    query: ItemDocument,
    ...options,
  });
}
