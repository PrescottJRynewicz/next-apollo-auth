import { Resolvers } from 'types/schema/generated';
import { userResolver } from '/graph/user/resolver';

export const resolvers: Resolvers = {
  ...userResolver,
};
