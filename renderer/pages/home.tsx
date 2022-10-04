import { UnderConstruction } from '@components/common/Placeholder';
import { addAddress, getAddress } from '@database/models/address';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    getAddress();
  }, []);
  return <UnderConstruction />;
}
