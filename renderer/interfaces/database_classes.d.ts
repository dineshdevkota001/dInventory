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
