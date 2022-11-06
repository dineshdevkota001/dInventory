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

type IAddressCreateInput = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  district?: InputMaybe<Scalars['String']>;
  tole: Scalars['String'];
  ward: Scalars['Int'];
};

type IAddressList = {
  __typename?: 'AddressList';
  items?: Maybe<Array<IAddress>>;
  pageInfo?: Maybe<IPageInfo>;
};

type IIdWhereUniqueInput = {
  id: Scalars['String'];
};

type IInventory = {
  __typename?: 'Inventory';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  items?: Maybe<Array<IItem>>;
  name: Scalars['String'];
};

type IItem = {
  __typename?: 'Item';
  boughtAt: Scalars['DateTime'];
  buyPrice: Scalars['Float'];
  expiryAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  inventoryId: Scalars['ID'];
  packing?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['ID']>;
  sellPrice: Scalars['Float'];
  /** No of items in a unit or carton. */
  unitNumber?: Maybe<Scalars['Int']>;
  /** Unit of item. ml or kg or l */
  unitType: Scalars['String'];
  wholesalePrice?: Maybe<Scalars['Float']>;
};

type IMutation = {
  __typename?: 'Mutation';
  createAddress?: Maybe<IAddress>;
  createUser?: Maybe<IUser>;
  removeAddress?: Maybe<IAddress>;
  removeUser?: Maybe<IUser>;
};

type IMutationCreateAddressArgs = {
  data?: InputMaybe<IAddressCreateInput>;
};

type IMutationCreateUserArgs = {
  data: IUserCreateInput;
};

type IMutationRemoveAddressArgs = {
  where: IIdWhereUniqueInput;
};

type IMutationRemoveUserArgs = {
  where: IIdWhereUniqueInput;
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

enum ProductType {
  Bolus = 'Bolus',
  Feed = 'Feed',
  Medicine = 'Medicine',
  Poison = 'Poison',
  Tool = 'Tool',
}

type IQuery = {
  __typename?: 'Query';
  address?: Maybe<IAddress>;
  addresses?: Maybe<IAddressList>;
  getInventories?: Maybe<Array<IInventory>>;
  getInventoryById?: Maybe<IInventory>;
  user?: Maybe<IUser>;
  users?: Maybe<IUserList>;
};

type IQueryAddressArgs = {
  where?: InputMaybe<IIdWhereUniqueInput>;
};

type IQueryGetInventoryByIdArgs = {
  where?: InputMaybe<IIdWhereUniqueInput>;
};

type IQueryUserArgs = {
  where?: InputMaybe<IIdWhereUniqueInput>;
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

type IUserList = {
  __typename?: 'UserList';
  items?: Maybe<Array<IUser>>;
  pageInfo?: Maybe<IPageInfo>;
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

type IMinimalAddressFragment = {
  __typename?: 'Address';
  id: string;
  city: string;
  tole?: string | null;
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
  data?: InputMaybe<IAddressCreateInput>;
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

type IRemoveAddressMutationVariables = Exact<{
  where: IIdWhereUniqueInput;
}>;

type IRemoveAddressMutation = {
  __typename?: 'Mutation';
  removeAddress?: {
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

type IRemoveUserMutationVariables = Exact<{
  where: IIdWhereUniqueInput;
}>;

type IRemoveUserMutation = {
  __typename?: 'Mutation';
  removeUser?: {
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

type IAddressesQueryVariables = Exact<{ [key: string]: never }>;

type IAddressesQuery = {
  __typename?: 'Query';
  addresses?: {
    __typename?: 'AddressList';
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

type IMinimalAddressesQueryVariables = Exact<{ [key: string]: never }>;

type IMinimalAddressesQuery = {
  __typename?: 'Query';
  addresses?: {
    __typename?: 'AddressList';
    items?: Array<{
      __typename?: 'Address';
      id: string;
      city: string;
      tole?: string | null;
    }> | null;
    pageInfo?: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
    } | null;
  } | null;
};

type IUsersQueryVariables = Exact<{ [key: string]: never }>;

type IUsersQuery = {
  __typename?: 'Query';
  users?: {
    __typename?: 'UserList';
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
  } | null;
};
