import { useCallback, useEffect, useState } from 'react';

interface IUseDatabase<T extends () => Promise<any>> {
  data: Awaited<ReturnType<T>>;
  refetch: () => void;
  loading: boolean;
}

export default function useDatabase<T extends (x?: any) => Promise<any>>(
  callbackFunction: T,
  callbackProps: Parameters<T>,
  skip?: boolean,
): IUseDatabase<T> {
  const [data, setAddress] = useState<IUseDatabase<T>['data'] | undefined>();

  const refetch = useCallback(async () => {
    const addresses = await callbackFunction(callbackProps);
    setAddress(addresses);
  }, [callbackFunction, callbackProps]);

  useEffect(() => {
    if (!skip) refetch();
  }, [skip]);

  const loading = typeof data === 'undefined';
  return { data, refetch, loading };
}
