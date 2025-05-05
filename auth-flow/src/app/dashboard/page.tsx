'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

export default function Dashboard() {
  const router = useRouter();
  const { user, status, logout } = useAuthStore();

  useEffect(() => {
    // additional check for the client side protection
    if (status !== 'authenticated') {
        router.push('/');
    }
  }, [status, router]);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (status !== 'authenticated' ) {
    return (
        <div className='flex justify-center items-center h-screen bg-black'>
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8B80FF]"></div>
        </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-xl mt-4">Welcome, you're logged in.</p>
        {user && (
          <p className="text-gray-600">
            Email: {user.email}
          </p>
        )}
        <div className="mt-8">
          <button
            onClick={handleLogout}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}