import { format } from 'date-fns';
import Table from '@components/core/Table';
import AddAddress from '@components/address/AddAddress';

export default function Address() {
  const address = [];
  return (
    <Table
      data={address}
      renderTopToolbarCustomActions={AddAddress}
      columns={[
        {
          header: 'Tole',
          accessorKey: 'tole',
        },
        {
          header: 'Address',
          accessorFn: ({ city, country, district, ward_no }) =>
            `${city} ${ward_no}, ${district}, ${country}`,
        },
        {
          header: 'Created On',
          accessorFn: ({ created_on }) =>
            format(new Date(created_on), 'yyyy MMM dd'),
        },
      ]}
    />
  );
}
