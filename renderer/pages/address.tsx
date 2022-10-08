import { getAddress } from '@database/models/address';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Table from '@components/core/Table';
import AddAddress from '@components/address/AddAddress';

export default function Buyer() {
  const [address, setAddress] = useState<IAddress[] | undefined>();
  useEffect(() => {
    (async () => {
      const addresses = await getAddress();
      setAddress(addresses.rows);
    })();
  }, []);

  const loading = typeof address === 'undefined';

  if (loading) return null;

  return (
    <Table
      data={address}
      renderTopToolbarCustomActions={AddAddress}
      columns={[
        { header: 'Id', accessorKey: 'id' },
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
          accessorFn: ({ created_on }) => format(created_on, 'yyyy MMM dd'),
        },
      ]}
    />
  );
}
