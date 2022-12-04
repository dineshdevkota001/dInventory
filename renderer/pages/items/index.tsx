import List from '@components/common/List';
import { AddUser } from '@components/Create';
import { PARTNERS } from '@constants/static/routes';
import { useProductsQuery } from '@generated/graphql';
import { Stack } from '@mui/material';

export default function AddressPane() {
  const [{ data }] = useProductsQuery();
  const users = data?.products?.items;

  return (
    <Stack direction="row" height={1}>
      <List data={users} getLabel={({ name }) => name} baseUrl={PARTNERS}>
        <AddUser />
      </List>
    </Stack>
  );
}
