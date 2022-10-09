import { QueryResult } from 'pg';

type IDbResult<T> = QueryResult<IToDb<T>>;
