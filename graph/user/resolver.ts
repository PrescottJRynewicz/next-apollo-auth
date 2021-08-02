import { QueryResolvers, Resolvers } from '/types/schema/generated';
import { Mongo as MongoConnection } from '/graph/mongo';
import { ApolloError } from 'apollo-server-micro';

export const userResolver: Resolvers = {
  User: {
    email: (parent) => parent.email,
    _id: (parent) => parent._id,
  },
  Query: {
    users: async (_parent, _args, { Mongo }) => {
      const users = await Mongo.Users.find().limit(10).toArray();

      if (!users.length) {
        throw new ApolloError('Unable to find user', '404');
      }

      return users;
    },
  } as QueryResolvers<{ Mongo: typeof MongoConnection }>,
};
