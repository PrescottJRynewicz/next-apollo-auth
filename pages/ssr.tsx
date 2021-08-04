import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from 'styles/Home.module.css';
import { ClientGetUserQuery, GetUserDocument } from '/graph/generated.client';
import { apolloClient } from '/graph/apolloClient';
import { ApolloQueryResult } from '@apollo/client';
import { GetServerSidePropsContext } from 'next';

type SSRProps = {
  users: ApolloQueryResult<ClientGetUserQuery>;
};

export default function SSRExample(props: SSRProps) {
  console.log(props.users);

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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log(context);
  const result = await apolloClient.query<ClientGetUserQuery>({
    query: GetUserDocument,
  });

  return {
    props: { users: result.data.users },
  };
}