'use client';

import dynamic from "next/dynamic";

//dynamically import the login page component to prevent SSR

const LoginPage =dynamic(() => import('@/components/LoginPage'), {
  ssr: false,
  loading: () => (
    <div>
      <div></div>
    </div>
  )
});

export default function Home() {
  return <LoginPage/>;
}