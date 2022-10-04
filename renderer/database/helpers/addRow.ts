import jsToPostgres from './jsToPostgres';

export default function addRow<T extends IDatabaseTable>(
  tableName: T,
  value: Partial<IDatabaseTypeMap[T]>,
) {
  return `INSERT INTO ${tableName}(${Object.keys(value)
    .map(jsToPostgres)
    .join(', ')}) VALUES (${Object.values(value)
    .map(val => {
      if (typeof val === 'string') return `'${val}'`;
      return val;
    })
    .join(', ')});`;
}
