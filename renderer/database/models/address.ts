import addRow from '@database/helpers/addRow';
import getRows from '@database/helpers/getRows';
import pool from 'database/connect';
import deleteRow from 'database/helpers/deleteRow';
import { IDbResult } from './type';

export async function addAddress(input: IAddressEntry) {
  await pool.query(addRow('address', input));
}

export async function getAddress(): Promise<IDbResult<IAddress>> {
  const res = await pool.query(getRows('address'));
  return res;
}

export async function deleteAddress({ id }: IDatabaseIdProp) {
  await pool.query(deleteRow('address', id));
}
