import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from 'styles/Home.module.css';
import { ClientGetUserQuery, GetUserDocument } from '/generated/client';
import { apolloClient } from '/graph/apolloClient';

type SSRProps = {
  users: ClientGetUserQuery['users'];
};

export default function SSRExample(props: SSRProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>SSR Page Example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <h3>
          This is a server side rendered, pretty fast page. Not as fast as a
          static page though
        </h3>

        <p className={styles.description}>
          Explore this page at{' '}
          <code className={styles.code}>pages/ssr.tsx</code>
        </p>
        <p>
          <b>
            This data was generated on the server for first render
            <code
              className={styles.code}
              style={{
                maxWidth: '600px',
                wordWrap: 'break-word',
                whiteSpace: 'pre',
              }}>
              {JSON.stringify(props.users[0], null, '\n    ')}
            </code>
          </b>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getServerSideProps(): Promise<{ props: SSRProps }> {
  const result = await apolloClient.query<ClientGetUserQuery>({
    query: GetUserDocument,
  });

  return {
    props: { users: result.data.users },
  };
}
