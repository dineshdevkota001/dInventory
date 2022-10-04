import jsToPostgres from './jsToPostgres';

export default function getRows<T extends IDatabaseTable>(
  tableName: T,
  selectFields?: (keyof IDatabaseTypeMap[T])[],
  queryExtension?: Partial<IDatabaseTypeMap[T]>,
) {
  const baseQuery = `SELECT ${
    !selectFields?.length
      ? '*'
      : (selectFields as string[]).map(jsToPostgres).join(', ')
  } FROM ${tableName}`;
  if (!queryExtension) return `${baseQuery};`;
  return `${baseQuery} ${queryExtension};`;
}
