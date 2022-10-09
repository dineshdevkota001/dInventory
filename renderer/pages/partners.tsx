import Table from '@components/core/Table';
import useDatabase from '@hooks/useDatabase';
import { getProfile } from '@database/models/profile';
import AddPartner from '@components/partner/AddPartner';

export default function Partners() {
  const { data, loading } = useDatabase(getProfile, []);
  const address = data?.rows;
  if (loading) return null;

  return (
    <Table
      data={address}
      renderTopToolbarCustomActions={AddPartner}
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
          accessorFn: ({ email, phone }) =>
            `${email ?? ''}${email ? ', ' : ''}${phone}`,
        },
        {
          header: 'Description',
          accessorKey: 'description',
        },
      ]}
    />
  );
}
