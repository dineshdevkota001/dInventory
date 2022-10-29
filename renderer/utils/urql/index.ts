import { BACKEND } from '@constants/static/api';
import { cacheExchange } from '@urql/exchange-graphcache';
import { createClient, dedupExchange, fetchExchange } from 'urql';
import schema from '@generated/introspection.json';
import { IntrospectionQuery } from 'graphql';

const client = createClient({
  url: BACKEND,
  exchanges: [
    dedupExchange,
    cacheExchange({ schema: schema as unknown as IntrospectionQuery }),
    fetchExchange,
  ],
});

export default client;
