import type { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from 'graph/types';
import { resolvers } from '/graph/resolvers';
import { Mongo } from '/database/mongo';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => {
    await Mongo.connectionPromise;
    return {
      Mongo,
    };
  },
});
const connectionPromises = Promise.all([
  apolloServer.start(),
  Mongo.connectionPromise,
]);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader(
      'Access-Control-Allow-Origin',
      'https://studio.apollographql.com'
    );
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    if (req.method === 'OPTIONS') {
      res.end();
      return false;
    }

    await connectionPromises;
    return await apolloServer.createHandler({
      path: '/api/graphql',
    })(req, res);
  } catch (error) {
    res.status(500).json({ error });
    return null;
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
