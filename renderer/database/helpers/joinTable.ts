import jsToPostgres from './jsToPostgres';

export default function joinTwoTable<
  T1 extends IDatabaseTable,
  T2 extends IDatabaseTable,
>(
  firstTable: T1,
  secondTable: T2,
  matchFields?: Record<IDatabaseKeys<T1>, IDatabaseKeys<T2>>,
  selectFields?: IDatabaseKeys<T1 | T2>[],
) {
  const joinTableSection = `SELECT ${
    !selectFields?.length
      ? '*'
      : (selectFields as string[]).map(jsToPostgres).join(', ')
  } FROM ${firstTable} JOIN ${secondTable}`;

  if (!matchFields) return joinTableSection;
  return `${joinTableSection} ON ${Object.keys(matchFields)
    .map(key => `${key} = ${matchFields[key]}`)
    .join(', ')};`;
}
