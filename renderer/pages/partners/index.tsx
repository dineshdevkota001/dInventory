import List from '@components/common/List';
import AddUser from '@components/user/AddUser';
import { PARTNERS } from '@constants/static/routes';
import { useUsersQuery } from '@generated/graphql';

export default function Users() {
  const [{ data }] = useUsersQuery();
  const users = data?.users?.items;

  return (
    <List data={users} getLabel={({ name }) => name} baseUrl={PARTNERS}>
      <AddUser />
    </List>
  );
}
