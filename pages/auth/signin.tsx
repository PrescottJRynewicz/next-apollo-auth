import React from 'react';
import { ClientSafeProvider, getProviders, signIn } from 'next-auth/client';

export default function SignIn({
  providers,
}: {
  providers: Record<string, ClientSafeProvider>;
}) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button type="button" onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
