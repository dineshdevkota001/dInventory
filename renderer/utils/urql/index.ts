import { BACKEND } from '@constants/static/api';
import { cacheExchange } from '@urql/exchange-graphcache';
import { createClient, dedupExchange, fetchExchange } from 'urql';
import schema from '@generated/introspection.json';

const client = createClient({
  url: BACKEND,
  exchanges: [dedupExchange, cacheExchange({ schema }), fetchExchange],
});

export default client;
