import Table from '@components/core/Table';
import AddUser from '@components/user/AddUser';
import { useUsersQuery } from '@generated/graphql';

export default function Users() {
  const [{ data }] = useUsersQuery();
  const users = data?.users?.items;

  return (
    <Table
      data={users ?? []}
      renderTopToolbarCustomActions={AddUser}
      columns={[
        {
          header: 'Name',
          accessorKey: 'name',
        },
        {
          header: 'Institution',
          accessorKey: 'institution',
        },
        {
          header: 'Balance',
          accessorKey: 'balance',
        },

        {
          header: 'Contact',
          accessorFn: ({ email }) => `${email ?? ''}${email ? ', ' : 'N/A'}`,
        },
        {
          header: 'Address',
          accessorFn: row =>
            `${row?.address?.city} ${row?.address?.ward}, ${row?.address?.tole}`,
        },
        {
          header: 'Description',
          accessorKey: 'description',
        },
      ]}
    />
  );
}
