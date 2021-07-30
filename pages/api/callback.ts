import type { NextApiRequest, NextApiResponse } from 'next';
import auth0 from '/pages/api/utils/auth0';

export default async function callback(req: NextApiRequest, res: NextApiResponse) {
  try {
    await auth0.handleCallback(req, res);
  } catch (error) {
    console.log(error);
    res.status(error.status || 400).end(error.message);
  }
}
