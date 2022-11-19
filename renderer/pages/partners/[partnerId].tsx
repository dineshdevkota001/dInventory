import List from '@components/common/List';
import AddUser from '@components/user/AddUser';
import UserDetails from '@components/user/UserDetail';
import { PARTNERS } from '@constants/static/routes';
import { useUsersQuery } from '@generated/graphql';
import { Stack } from '@mui/material';
import { useRouter } from 'next/router';

export default function AddressPane() {
  const { query } = useRouter();
  const [{ data }] = useUsersQuery();
  const users = data?.users?.items;

  const id = query.partnerId as string;

  return (
    <Stack direction="row" height={1}>
      <List
        data={users}
        getLabel={({ name, address }) =>
          `${name}, ${address.tole} ${address.ward}, ${address.district}`
        }
        baseUrl={PARTNERS}
        selectedId={id}
      >
        <AddUser />
      </List>
      <UserDetails id={id} />
    </Stack>
  );
}
