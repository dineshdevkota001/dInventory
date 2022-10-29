import { BACKEND } from '@constants/static/api';
import { cacheExchange } from '@urql/exchange-graphcache';
import { createClient, dedupExchange, fetchExchange } from 'urql';

const client = createClient({
  url: BACKEND,
  exchanges: [dedupExchange, cacheExchange({}), fetchExchange],
});

export default client;
