import { UpdatesConfig } from '@urql/exchange-graphcache';

const updates: Partial<UpdatesConfig> = {
  Mutation: {
    removeUser: (result: IRemoveUserMutation, _args, cache) => {
      cache.invalidate(result);
    },
  },
};

export default updates;
