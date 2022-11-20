import List from '@components/common/List';
import { AddInventory } from '@components/Create';
import { INVENTORY } from '@constants/static/routes';
import { useInventoriesQuery } from '@generated/graphql';
import { Stack } from '@mui/material';
import { useRouter } from 'next/router';

export default function AddressPane() {
  const { query } = useRouter();
  const [{ data }] = useInventoriesQuery();
  const addresses = data?.inventories?.items;

  const id = query.addressId as string;

  return (
    <Stack direction="row" height={1}>
      <List
        data={addresses}
        getLabel={({ name }) => name}
        baseUrl={INVENTORY}
        selectedId={id}
      >
        <AddInventory />
      </List>
    </Stack>
  );
}
