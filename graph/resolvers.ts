import { Resolvers } from '/graph/generated';
import { userResolver } from '/graph/user/resolver';
import { DateScalar } from '/graph/scalars';

export const resolvers = {
  ...userResolver,
  Date: DateScalar,
} as Resolvers;
