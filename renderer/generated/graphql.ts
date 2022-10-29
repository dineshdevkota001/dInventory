import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export const RegularAddressFragmentDoc = gql`
    fragment RegularAddress on Address {
  id
  ward
  tole
  createdOn
  country
  city
  district
}
    `;
export const GetAddressesDocument = gql`
    query GetAddresses {
  getAddresses {
    ...RegularAddress
  }
}
    ${RegularAddressFragmentDoc}`;

export function useGetAddressesQuery(options?: Omit<Urql.UseQueryArgs<IGetAddressesQueryVariables>, 'query'>) {
  return Urql.useQuery<IGetAddressesQuery, IGetAddressesQueryVariables>({ query: GetAddressesDocument, ...options });
};