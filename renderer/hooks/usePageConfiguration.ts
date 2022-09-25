import { pageConfiguration } from '@constants/generative/layoutConfiguration';
import { useRouter } from 'next/router';

export default function usePageConfiguration() {
  const { pathname } = useRouter();
  const currentPageConfiguration = pageConfiguration.find(({ route }) =>
    pathname.includes(route),
  );
  return currentPageConfiguration;
}
