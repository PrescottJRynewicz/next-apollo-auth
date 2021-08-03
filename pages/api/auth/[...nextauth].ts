import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import MongoAdapter from '/pages/api/auth/utils/MongoAdapter';

export default NextAuth({
  providers: [
    Providers.Email({
      from: process.env.EMAIL_FROM,
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
    }),
  ],
  session: {
    jwt: true,
    // about 4 months
    maxAge: 120 * 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },

  /*
   * Because TypeORM does not officially support Mongo 4 right now,
   * we need to make our own Adapter to use Mongo
   */
  adapter: MongoAdapter(),
});
