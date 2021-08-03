import { Resolvers } from '/graph/generated';
import { userResolver } from '/graph/user/resolver';
import { DateScalar, ObjectIdScalar } from '/graph/scalars';

export const resolvers = {
  ...userResolver,
  Date: DateScalar,
  ObjectId: ObjectIdScalar,
} as Resolvers;
