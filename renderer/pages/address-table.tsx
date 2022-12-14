import { format } from 'date-fns';
import Table from '@components/core/Table';
import AddAddress from '@components/address/AddAddress';
import { useAddressesQuery } from '@generated/graphql';

export default function Address() {
  const [{ data }] = useAddressesQuery();
  const address = data?.addresses?.items ?? [];

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
          accessorFn: ({ city, country, district, ward }) =>
            `${city} ${ward}, ${district}, ${country}`,
        },
        {
          header: 'Created On',
          accessorFn: ({ createdOn }) =>
            format(new Date(createdOn), 'yyyy MMM dd'),
        },
      ]}
    />
  );
}
