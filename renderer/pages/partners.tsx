import Table from '@components/core/Table';
import AddPartner from '@components/partner/AddPartner';

export default function Partners() {
  const address = [];

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
          header: 'Address',
          accessorFn: row => `${row.city} ${row.ward_no}, ${row.tole}`,
        },
        {
          header: 'Description',
          accessorKey: 'description',
        },
      ]}
    />
  );
}
