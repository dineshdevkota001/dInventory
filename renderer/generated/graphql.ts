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
export const RegularPageInfoFragmentDoc = gql`
    fragment RegularPageInfo on PageInfo {
  endCursor
  hasNextPage
}
    `;
export const AddressesDocument = gql`
    query Addresses {
  addresses {
    items {
      ...RegularAddress
    }
    pageInfo {
      ...RegularPageInfo
    }
  }
}
    ${RegularAddressFragmentDoc}
${RegularPageInfoFragmentDoc}`;

export function useAddressesQuery(options?: Omit<Urql.UseQueryArgs<IAddressesQueryVariables>, 'query'>) {
  return Urql.useQuery<IAddressesQuery, IAddressesQueryVariables>({ query: AddressesDocument, ...options });
};