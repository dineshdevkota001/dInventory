type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

/** Address of users and location. */
type IAddress = {
  __typename?: 'Address';
  city: Scalars['String'];
  country: Scalars['String'];
  createdOn: Scalars['DateTime'];
  district: Scalars['String'];
  id: Scalars['ID'];
  tole?: Maybe<Scalars['String']>;
  ward: Scalars['Int'];
};

type IAddressConnection = {
  __typename?: 'AddressConnection';
  items?: Maybe<Array<IAddress>>;
  pageInfo?: Maybe<IPageInfo>;
};

type IAddressCreateInput = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  district?: InputMaybe<Scalars['String']>;
  tole: Scalars['String'];
  ward: Scalars['Int'];
};

type IAddressWhereUniqueInput = {
  id: Scalars['String'];
};

type IInventory = {
  __typename?: 'Inventory';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  items?: Maybe<Array<IItem>>;
  name: Scalars['String'];
};

type IInventoryConnection = {
  __typename?: 'InventoryConnection';
  items?: Maybe<Array<IInventory>>;
  pageInfo?: Maybe<IPageInfo>;
};

type IInventoryCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

type IInventoryWhereUniqueInput = {
  id: Scalars['String'];
};

type IItem = {
  __typename?: 'Item';
  boughtAt: Scalars['DateTime'];
  buyPrice: Scalars['Float'];
  expiryAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  inventoryId: Scalars['ID'];
  packing?: Maybe<Scalars['String']>;
  product?: Maybe<IProduct>;
  productId?: Maybe<Scalars['ID']>;
  sellPrice: Scalars['Float'];
  /** No of items in a unit or carton. */
  unitNumber?: Maybe<Scalars['Int']>;
  /** Unit of item. ml or kg or l */
  unitType: Scalars['String'];
  wholesalePrice?: Maybe<Scalars['Float']>;
};

type IItemConnection = {
  __typename?: 'ItemConnection';
  items?: Maybe<Array<IItem>>;
  pageInfo?: Maybe<IPageInfo>;
};

type IItemCreateInput = {
  buyPrice: Scalars['Float'];
  inventoryId: Scalars['ID'];
  packing: Scalars['String'];
  productId: Scalars['ID'];
  sellPrice: Scalars['Float'];
  unitNumber: Scalars['Int'];
  wholesalePrice?: InputMaybe<Scalars['Float']>;
};

type IItemWhereUniqueInput = {
  id: Scalars['String'];
};

type IMutation = {
  __typename?: 'Mutation';
  createAddress?: Maybe<IAddress>;
  createInventory?: Maybe<IInventory>;
  createItem?: Maybe<IItem>;
  createProduct?: Maybe<IProduct>;
  createUser?: Maybe<IUser>;
  deleteAddress?: Maybe<IAddress>;
  deleteInventory?: Maybe<IInventory>;
  deleteItem?: Maybe<IItem>;
  deleteProduct?: Maybe<IProduct>;
  deleteUser?: Maybe<IUser>;
};

type IMutationCreateAddressArgs = {
  data?: InputMaybe<IAddressCreateInput>;
};

type IMutationCreateInventoryArgs = {
  data: IInventoryCreateInput;
};

type IMutationCreateItemArgs = {
  data: IItemCreateInput;
};

type IMutationCreateProductArgs = {
  data: IProductCreateInput;
};

type IMutationCreateUserArgs = {
  data: IUserCreateInput;
};

type IMutationDeleteAddressArgs = {
  where: IAddressWhereUniqueInput;
};

type IMutationDeleteInventoryArgs = {
  where: IInventoryWhereUniqueInput;
};

type IMutationDeleteItemArgs = {
  where: IItemWhereUniqueInput;
};

type IMutationDeleteProductArgs = {
  where: IProductWhereUniqueInput;
};

type IMutationDeleteUserArgs = {
  where: IUserWhereUniqueInput;
};

type IPageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
};

type IProduct = {
  __typename?: 'Product';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  items?: Maybe<Array<IItem>>;
  name: Scalars['String'];
  type: ProductType;
};

type IProductConnection = {
  __typename?: 'ProductConnection';
  items?: Maybe<Array<IProduct>>;
  pageInfo?: Maybe<IPageInfo>;
};

type IProductCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  type: ProductType;
};

enum ProductType {
  Bolus = 'Bolus',
  Feed = 'Feed',
  Medicine = 'Medicine',
  Poison = 'Poison',
  Tool = 'Tool',
}

type IProductWhereUniqueInput = {
  id: Scalars['String'];
};

type IQuery = {
  __typename?: 'Query';
  address?: Maybe<IAddress>;
  addresses?: Maybe<IAddressConnection>;
  inventories?: Maybe<IInventoryConnection>;
  inventory?: Maybe<IInventory>;
  item?: Maybe<IItem>;
  items?: Maybe<IItemConnection>;
  product?: Maybe<IProduct>;
  products?: Maybe<IProductConnection>;
  user?: Maybe<IUser>;
  users?: Maybe<IUserConnection>;
};

type IQueryAddressArgs = {
  where?: InputMaybe<IAddressWhereUniqueInput>;
};

type IQueryAddressesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

type IQueryInventoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

type IQueryInventoryArgs = {
  where?: InputMaybe<IInventoryWhereUniqueInput>;
};

type IQueryItemArgs = {
  where?: InputMaybe<IItemWhereUniqueInput>;
};

type IQueryItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

type IQueryProductArgs = {
  where?: InputMaybe<IProductWhereUniqueInput>;
};

type IQueryProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

type IQueryUserArgs = {
  where?: InputMaybe<IUserWhereUniqueInput>;
};

type IQueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

type ITransaction = {
  __typename?: 'Transaction';
  clearedAtTransaction?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  lastPrintedAt?: Maybe<Scalars['DateTime']>;
  paymentAmount?: Maybe<Scalars['Float']>;
  printCount?: Maybe<Scalars['Int']>;
  relatedTraderId?: Maybe<Scalars['ID']>;
  remarks?: Maybe<Scalars['String']>;
  tax?: Maybe<Scalars['Float']>;
  totalAmount?: Maybe<Scalars['Float']>;
};

enum TransactionChannel {
  Cash = 'Cash',
}

type ITransactionItem = {
  __typename?: 'TransactionItem';
  count?: Maybe<Scalars['Int']>;
  currentPrice?: Maybe<Scalars['Float']>;
  itemId?: Maybe<Scalars['ID']>;
  transactionId?: Maybe<Scalars['ID']>;
};

enum TransactionType {
  Buy = 'Buy',
  Pay = 'Pay',
  Recieve = 'Recieve',
  Sell = 'Sell',
}

/** User */
type IUser = {
  __typename?: 'User';
  address?: Maybe<IAddress>;
  addressId: Scalars['ID'];
  balance: Scalars['Float'];
  bankAccount?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  institution: Scalars['String'];
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  /** List of transaction the user is involved with */
  transactions?: Maybe<Array<ITransaction>>;
};

type IUserConnection = {
  __typename?: 'UserConnection';
  items?: Maybe<Array<IUser>>;
  pageInfo?: Maybe<IPageInfo>;
};

type IUserCreateInput = {
  addressId: Scalars['ID'];
  balance?: InputMaybe<Scalars['Float']>;
  bankAccount?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  institution: Scalars['String'];
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
};

type IUserWhereUniqueInput = {
  id: Scalars['String'];
};

type IMinimalAddressFragment = {
  __typename?: 'Address';
  id: string;
  city: string;
  tole?: string | null;
};

type IRegularAddressFragment = {
  __typename?: 'Address';
  id: string;
  ward: number;
  tole?: string | null;
  createdOn: any;
  country: string;
  city: string;
  district: string;
};

type IRegularInventoryFragment = {
  __typename?: 'Inventory';
  id: string;
  name: string;
  description?: string | null;
};

type IRegularProductFragment = {
  __typename?: 'Product';
  id: string;
  name: string;
  type: ProductType;
  imageUrl?: string | null;
  description?: string | null;
};

type IMinimalProductFragment = {
  __typename?: 'Product';
  id: string;
  name: string;
};

type IRegularItemFragment = {
  __typename?: 'Item';
  id: string;
  packing?: string | null;
  productId?: string | null;
  unitType: string;
  unitNumber?: number | null;
  buyPrice: number;
  wholesalePrice?: number | null;
  sellPrice: number;
};

type IMinimalItemFragment = {
  __typename?: 'Item';
  id: string;
  packing?: string | null;
  product?: { __typename?: 'Product'; id: string; name: string } | null;
};

type IRegularPageInfoFragment = {
  __typename?: 'PageInfo';
  endCursor?: string | null;
  hasNextPage: boolean;
};

type IRegularUserFragment = {
  __typename?: 'User';
  id: string;
  balance: number;
  name: string;
  email?: string | null;
  institution: string;
  description?: string | null;
  address?: {
    __typename?: 'Address';
    id: string;
    ward: number;
    tole?: string | null;
    createdOn: any;
    country: string;
    city: string;
    district: string;
  } | null;
};

type ICreateAddressMutationVariables = Exact<{
  data: IAddressCreateInput;
}>;

type ICreateAddressMutation = {
  __typename?: 'Mutation';
  createAddress?: {
    __typename?: 'Address';
    id: string;
    ward: number;
    tole?: string | null;
    createdOn: any;
    country: string;
    city: string;
    district: string;
  } | null;
};

type ICreateUserMutationVariables = Exact<{
  data: IUserCreateInput;
}>;

type ICreateUserMutation = {
  __typename?: 'Mutation';
  createUser?: {
    __typename?: 'User';
    id: string;
    balance: number;
    name: string;
    email?: string | null;
    institution: string;
    description?: string | null;
    address?: {
      __typename?: 'Address';
      id: string;
      ward: number;
      tole?: string | null;
      createdOn: any;
      country: string;
      city: string;
      district: string;
    } | null;
  } | null;
};

type ICreateInventoryMutationVariables = Exact<{
  data: IInventoryCreateInput;
}>;

type ICreateInventoryMutation = {
  __typename?: 'Mutation';
  createInventory?: {
    __typename?: 'Inventory';
    id: string;
    name: string;
    description?: string | null;
  } | null;
};

type IDeleteAddressMutationVariables = Exact<{
  where: IAddressWhereUniqueInput;
}>;

type IDeleteAddressMutation = {
  __typename?: 'Mutation';
  deleteAddress?: {
    __typename?: 'Address';
    id: string;
    ward: number;
    tole?: string | null;
    createdOn: any;
    country: string;
    city: string;
    district: string;
  } | null;
};

type IDeleteUserMutationVariables = Exact<{
  where: IUserWhereUniqueInput;
}>;

type IDeleteUserMutation = {
  __typename?: 'Mutation';
  deleteUser?: {
    __typename?: 'User';
    id: string;
    balance: number;
    name: string;
    email?: string | null;
    institution: string;
    description?: string | null;
    address?: {
      __typename?: 'Address';
      id: string;
      ward: number;
      tole?: string | null;
      createdOn: any;
      country: string;
      city: string;
      district: string;
    } | null;
  } | null;
};

type IDeleteInventoryMutationVariables = Exact<{
  where: IInventoryWhereUniqueInput;
}>;

type IDeleteInventoryMutation = {
  __typename?: 'Mutation';
  deleteInventory?: {
    __typename?: 'Inventory';
    id: string;
    name: string;
    description?: string | null;
  } | null;
};

type IAddressesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;

type IAddressesQuery = {
  __typename?: 'Query';
  addresses?: {
    __typename?: 'AddressConnection';
    items?: Array<{
      __typename?: 'Address';
      id: string;
      ward: number;
      tole?: string | null;
      createdOn: any;
      country: string;
      city: string;
      district: string;
    }> | null;
    pageInfo?: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
    } | null;
  } | null;
};

type IUsersQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;

type IUsersQuery = {
  __typename?: 'Query';
  users?: {
    __typename?: 'UserConnection';
    items?: Array<{
      __typename?: 'User';
      id: string;
      balance: number;
      name: string;
      email?: string | null;
      institution: string;
      description?: string | null;
      address?: {
        __typename?: 'Address';
        id: string;
        ward: number;
        tole?: string | null;
        createdOn: any;
        country: string;
        city: string;
        district: string;
      } | null;
    }> | null;
    pageInfo?: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
    } | null;
  } | null;
};

type IInventoriesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;

type IInventoriesQuery = {
  __typename?: 'Query';
  inventories?: {
    __typename?: 'InventoryConnection';
    items?: Array<{
      __typename?: 'Inventory';
      id: string;
      name: string;
      description?: string | null;
    }> | null;
    pageInfo?: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
    } | null;
  } | null;
};

type IProductsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;

type IProductsQuery = {
  __typename?: 'Query';
  products?: {
    __typename?: 'ProductConnection';
    items?: Array<{
      __typename?: 'Product';
      id: string;
      name: string;
      type: ProductType;
      imageUrl?: string | null;
      description?: string | null;
    }> | null;
    pageInfo?: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
    } | null;
  } | null;
};

type IItemsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
}>;

type IItemsQuery = {
  __typename?: 'Query';
  items?: {
    __typename?: 'ItemConnection';
    items?: Array<{
      __typename?: 'Item';
      id: string;
      packing?: string | null;
      productId?: string | null;
      unitType: string;
      unitNumber?: number | null;
      buyPrice: number;
      wholesalePrice?: number | null;
      sellPrice: number;
    }> | null;
    pageInfo?: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
    } | null;
  } | null;
};

type IMinimalAddressesQueryVariables = Exact<{ [key: string]: never }>;

type IMinimalAddressesQuery = {
  __typename?: 'Query';
  addresses?: {
    __typename?: 'AddressConnection';
    items?: Array<{
      __typename?: 'Address';
      id: string;
      city: string;
      tole?: string | null;
    }> | null;
  } | null;
};

type IMinimalProductsQueryVariables = Exact<{ [key: string]: never }>;

type IMinimalProductsQuery = {
  __typename?: 'Query';
  products?: {
    __typename?: 'ProductConnection';
    items?: Array<{ __typename?: 'Product'; id: string; name: string }> | null;
  } | null;
};

type IUserQueryVariables = Exact<{
  where?: InputMaybe<IUserWhereUniqueInput>;
}>;

type IUserQuery = {
  __typename?: 'Query';
  user?: {
    __typename?: 'User';
    id: string;
    balance: number;
    name: string;
    email?: string | null;
    institution: string;
    description?: string | null;
    address?: {
      __typename?: 'Address';
      id: string;
      ward: number;
      tole?: string | null;
      createdOn: any;
      country: string;
      city: string;
      district: string;
    } | null;
  } | null;
};

type IAddressQueryVariables = Exact<{
  where?: InputMaybe<IAddressWhereUniqueInput>;
}>;

type IAddressQuery = {
  __typename?: 'Query';
  address?: {
    __typename?: 'Address';
    id: string;
    ward: number;
    tole?: string | null;
    createdOn: any;
    country: string;
    city: string;
    district: string;
  } | null;
};

type IInventoryQueryVariables = Exact<{
  where?: InputMaybe<IInventoryWhereUniqueInput>;
}>;

type IInventoryQuery = {
  __typename?: 'Query';
  inventory?: {
    __typename?: 'Inventory';
    id: string;
    name: string;
    description?: string | null;
  } | null;
};

type IProductQueryVariables = Exact<{
  where?: InputMaybe<IProductWhereUniqueInput>;
}>;

type IProductQuery = {
  __typename?: 'Query';
  product?: {
    __typename?: 'Product';
    id: string;
    name: string;
    type: ProductType;
    imageUrl?: string | null;
    description?: string | null;
  } | null;
};

type IItemQueryVariables = Exact<{
  where?: InputMaybe<IItemWhereUniqueInput>;
}>;

type IItemQuery = {
  __typename?: 'Query';
  item?: {
    __typename?: 'Item';
    id: string;
    packing?: string | null;
    productId?: string | null;
    unitType: string;
    unitNumber?: number | null;
    buyPrice: number;
    wholesalePrice?: number | null;
    sellPrice: number;
  } | null;
};
