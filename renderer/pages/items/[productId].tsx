import List from '@components/common/List';
import { AddUser } from '@components/Create';
import { PARTNERS } from '@constants/static/routes';
import { useProductQuery, useProductsQuery } from '@generated/graphql';
import { Stack } from '@mui/material';
import { useRouter } from 'next/router';

export default function AddressPane() {
  const [{ data }] = useProductsQuery();
  const users = data?.products?.items;

  const { query } = useRouter();
  const id = query?.productId;

  const [{ data: itemsData }] = useProductQuery({
    variables: {
      where: { id: id as string },
    },
    pause: !id,
  });

  return (
    <Stack direction="row" height={1}>
      <List data={users} getLabel={({ name }) => name} baseUrl={PARTNERS}>
        <AddUser />
      </List>
    </Stack>
  );
}
