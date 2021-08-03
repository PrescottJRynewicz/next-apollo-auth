import { Adapter } from 'next-auth/adapters';
import { Mongo } from '/database/mongo';

const MongoAdapter = (): ReturnType<Adapter> => ({
  async getAdapter(appOptions) {
    console.log(appOptions);
    await Mongo.connectionPromise;
    return {
      async createUser(profile) {
        console.log('create user', profile);
        return null;
      },
      async getUser(id) {
        console.log('get user', id);

        return null;
      },
      async getUserByEmail(email) {
        console.log('get user by email', email);

        const user = await Mongo.Users.findOne({ email });

        return user;
      },
      async getUserByProviderAccountId(providerId, providerAccountId) {
        console.log(
          'get user by provider account id',
          providerId,
          providerAccountId
        );

        return null;
      },
      async updateUser(user) {
        console.log('update user', user);

        return null;
      },
      async deleteUser(userId) {
        console.log('delete user', userId);
      },
      async linkAccount(...params) {
        console.log('link account', params);
      },

      async unlinkAccount(...params) {
        console.log('unlink account', params);
      },
      async createSession(user) {
        console.log('create session', user);
        return null;
      },
      async getSession(sessionToken) {
        console.log('get session', sessionToken);
        return null;
      },
      async updateSession(session, force) {
        console.log('update session', session, force);
        return null;
      },
      async deleteSession(sessionToken) {
        console.log('delete session', sessionToken);
      },
      async createVerificationRequest(...params) {
        console.log('create verification request');
        console.log(params.length);
        // await provider.sendVerificationRequest({
        //   identifier,
        //   url,
        //   baseUrl: appOptions.baseUrl,
        //   provider,
        //   token,
        // });
      },
      async getVerificationRequest(...params) {
        console.log('ger verification request', params);
        return null;
      },
      async deleteVerificationRequest(...params) {
        console.log('delete verification request', params);
      },
    };
  },
});

export default MongoAdapter;
