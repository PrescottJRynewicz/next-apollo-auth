import { Resolvers } from '/types/schema/generated';
import { Mongo } from '/graph/mongo';
import { ApolloError } from 'apollo-server-micro';

export const userResolver: Resolvers = {
  User: {
    name: (parent) => parent.name,
    _id: (parent) => parent._id,
  },
  Query: {
    users: async () => {
      const user = await Mongo.Users.findOne();

      if (!user) {
        throw new ApolloError('Unable to find user', '404');
      }

      return [user];
    },
  },
};
