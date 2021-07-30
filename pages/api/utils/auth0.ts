import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  baseURL: 'http://localhost:3000',
  issuerBaseURL: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_SECRET,
  secret: process.env.COOKIE_SECRET,
  routes: {
    callback: '/api/callback',
    postLogoutRedirect: '/',
  },
  authorizationParams: {
    scope: 'openid profile',
  },
  session: {
    rolling: true,
    // 30 days
    rollingDuration: 60 * 60 * 24 * 30,
    absoluteDuration: false,
  },
});
