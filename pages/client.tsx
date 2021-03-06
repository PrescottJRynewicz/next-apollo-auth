import { useGetUserQuery } from '/generated/client';
import styles from '/styles/Home.module.css';
import Head from 'next/head';
import React from 'react';

export default function Client() {
  const { data, loading, error } = useGetUserQuery();

  const renderChildren = () => {
    if (error) return <div>failed to load</div>;
    if (loading) return <div>loading...</div>;
    return (
      <code
        className={styles.code}
        style={{
          maxWidth: '600px',
          wordWrap: 'break-word',
          whiteSpace: 'pre',
        }}>
        {JSON.stringify(data?.users, null, '\n    ')}
      </code>
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Client Page Example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h2>This is a client rendered page</h2>
        <p>It loads data through a graphcl query on the client</p>
        {renderChildren()}
      </main>
    </div>
  );
}
