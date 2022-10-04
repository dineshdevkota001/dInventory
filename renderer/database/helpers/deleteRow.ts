export default function deleteRow<T extends IDatabaseTable>(
  tableName: T,
  tableId: IID,
  propertyName = 'id' as keyof IDatabaseTypeMap[T],
) {
  return `DELETE FROM ${tableName} where ${String(propertyName)} = ${tableId};`;
}
