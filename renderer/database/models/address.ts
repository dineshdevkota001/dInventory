import addRow from '@database/helpers/addRow';
import getRows from '@database/helpers/getRows';
import pool from 'database/connect';
import deleteRow from 'database/helpers/deleteRow';

type IAddressEntry = Pick<IAddress, 'wardNo' | 'tole'>;

export async function addAddress(input: IAddressEntry) {
  await pool.query(addRow('address', input));
}

export async function getAddress() {
  await pool.query(getRows('address'));
}

export async function deleteAddress({ id }: IDatabaseIdProp) {
  await pool.query(deleteRow('address', id));
}
