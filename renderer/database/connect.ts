import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'din',
  user: 'din',
  password: 'nid',
});
pool.connect();

export default pool;

export function endConnection() {
  pool.end();
}
