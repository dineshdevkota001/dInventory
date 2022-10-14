interface IDatabaseTypeMap {
  address: IAddress;
  profile: IProfile;
  item_type: IItemType;
  inventory: IInventory;
  item: IItem;
  transaction: ITransaction;
  transaction_item: ITransactionItem;
}

type IDatabaseTable = keyof IDatabaseTypeMap;
type IDatabaseKeys<T> = IToDb<keyof IDatabaseTypeMap[T]>;

interface IAddress {
  id: IID;
  tole: string;
  wardNo: number;
  city: string;
  district: string;
  country: string;
  lat?: number;
  lng?: number;
  createdOn: string | Date;
}

interface IProfile {
  id: IID;
  balance: number;
  name: string;
  institution: string;
  phone: string;
  email: string;
  description: string;
  bankaccount: string;
  addressId: IID;
}

interface IItemType {
  id: IID;
  name: string;
  image: string;
  description: string;
  type: string;
}

interface IInventory {
  id: IID;
  name: string;
  addressId: number;
  locationDetail: string;
  image: string;
}

interface IItem {
  id: IID;
  price: number;
  boughtDate: string | Date;
  expiryDate: string | Date;
  stock: number;
  itemTypeId: IID;
  inventoryId: IID;
}

interface ITransaction {
  id: IID;
  createdDate: string | Date;
  totalAmount: number;
  paidAmount: number;
  profileId: number;
  inventoryId: IID;
  discount: number;
  tax: number;
  remarks: string;
  channel: string;
  type: string;
  printCount: number;
  lastPrintDate: string | Date;
}

interface ITransactionItem {
  transactionId: IID;
  itemId: IID;
  count: number;
}

type CamelCase<S extends string> =
  S extends `${infer P1}_${infer P2}${infer P3}`
    ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}`
    : Lowercase<S>;

type IFromDb<T> = {
  [K in keyof T as CamelCase<string & K>]: T[K];
};

type CamelToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? '_' : ''}${Lowercase<T>}${CamelToSnakeCase<U>}`
  : S;

type IToDb<T> = {
  [K in keyof T as CamelToSnakeCase<string & K>]: T[K];
};
