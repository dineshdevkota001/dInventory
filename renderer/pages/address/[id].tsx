import AddAddress from '@components/address/AddAddress';
import AddressDetails from '@components/address/AddressDetail';
import List from '@components/common/List';
import { ADDRESS } from '@constants/static/routes';
import { useMinimalAddressesQuery } from '@generated/graphql';
import { Stack } from '@mui/material';
import { useRouter } from 'next/router';

export default function AddressPane() {
  const { query } = useRouter();
  const [{ data }] = useMinimalAddressesQuery();
  const addresses = data?.addresses?.items;

  const id = query.id as string;

  return (
    <Stack direction="row" height={1}>
      <List
        data={addresses}
        getLabel={({ tole, city }) => `${tole}, ${city}`}
        baseUrl={ADDRESS}
      >
        <AddAddress />
      </List>
      <AddressDetails id={id} />
    </Stack>
  );
}
