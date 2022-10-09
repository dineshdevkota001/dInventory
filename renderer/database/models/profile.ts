import pool from '@database/connect';
import deleteRow from '@database/helpers/deleteRow';
import getRows from '@database/helpers/getRows';
import { IDbResult } from './type';

export async function getProfile(): Promise<IDbResult<IProfile>> {
  const res = await pool.query(getRows('profile'));
  return res;
}

export async function deleteProfile({ id }: IDatabaseIdProp) {
  await pool.query(deleteRow('profile', id));
}
