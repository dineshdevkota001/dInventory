import pool from '@database/connect';
import addRow from '@database/helpers/addRow';
import deleteRow from '@database/helpers/deleteRow';
import { IDbResult } from './type';

export async function addProfile(input: IProfileEntry) {
  await pool.query(addRow('profile', input));
}

export async function getProfile(): Promise<IDbResult<IProfile & IAddress>> {
  const res = await pool.query(
    'SELECT * FROM profile JOIN address ON address_id = address.id;',
  );
  return res;
}

export async function deleteProfile({ id }: IDatabaseIdProp) {
  await pool.query(deleteRow('profile', id));
}
