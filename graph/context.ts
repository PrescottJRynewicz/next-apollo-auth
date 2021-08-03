import { Mongo } from '/database/mongo';
import { Session } from 'next-auth';
import { User } from '/graph/generated.server';

export type ContextType = {
  Mongo: typeof Mongo;
  session: Session & { user: User };
};
