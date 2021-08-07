import { ApolloError } from 'apollo-server-micro';
import { Resolvers } from '/generated/server';
import { ContextType } from '/graph/context';
import { DeepPartial } from 'ts-essentials';

export const userResolver: DeepPartial<Resolvers<ContextType>> = {
  Query: {
    users: async (_parent, _args, { Mongo }) => {
      const users = await Mongo.Users.find().limit(10).toArray();

      if (!users.length) {
        throw new ApolloError('Unable to find user', '404');
      }

      return users;
    },
  },
};
