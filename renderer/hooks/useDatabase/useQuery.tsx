import { useCallback, useEffect, useState } from 'react';

interface IUseDatabaseQuery<T extends () => Promise<any>> {
  data: Awaited<ReturnType<T>>;
  refetch: () => void;
  loading: boolean;
}

export default function useDatabaseQuery<T extends () => Promise<any>>(
  callbackFunction: T,
): IUseDatabaseQuery<T> {
  const [data, setAddress] = useState<
    IUseDatabaseQuery<T>['data'] | undefined
  >();

  const refetch = useCallback(async () => {
    const addresses = await callbackFunction();
    setAddress(addresses);
  }, []);

  useEffect(() => {
    refetch();
  }, []);

  const loading = typeof data === 'undefined';
  return { data, refetch, loading };
}
