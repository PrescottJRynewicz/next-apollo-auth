import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import MongoAdapter from '/pages/api/auth/utils/MongoAdapter';

export default NextAuth({
  providers: [
    Providers.Credentials({
      authorize: async () => ({ name: 'Prescott' }),
    }),
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

  // A database is optional, but required to persist accounts in a database
  // database: process.env.MONGO_URI,
  adapter: MongoAdapter(),
  // pages: {
  //   signIn: '/auth/signin',
  //   signOut: '/auth/signout',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
});
