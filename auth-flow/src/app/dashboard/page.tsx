'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import Image from 'next/image';
import logoImg from '../../../public/LOGO.png';

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

    if (status !== 'authenticated') {
        return (
            <div className='flex justify-center items-center h-screen bg-black'>
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8B80FF]"></div>
            </div>
        )
    }

    return (
        <div className='min-h-screen flex flex-col bg-black text-white'>
            <header className='p-4 md:p-6 border-b border-gray-800'>
                <div className='container mx-auto flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <Image src={logoImg} alt="Room.me LOGO" width={100} height={100} />
                    </div>

                    <button onClick={handleLogout} className='px-4 py-2 rounded-md bg-[#5C53BC] hover:bg-[#8B80FF] text-white font-medium transition-colors duration-200'>
                        Logout
                    </button>
                </div>
            </header>

            <main className='flex flex-grow items-center justify-center p-6'>
                <div className='max-w-md w-full space-y-8 bg-gray-900 p-8 rounded-lg border border-gray-800 shadow-lg'>
                    <div className='text-center'>
                        <h1 className='text-3xl font-bold mb-4'>welcome, you're logged in.</h1>
                        {user && (
                            <p className='text-gray-400 text-lg'>
                                You are signed in as <span className="text-[#8B80FF] font-medium">{user.email}</span>
                            </p>
                        )}
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-3">Account Information</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Email:</span>
                                <span>{user?.email}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Status:</span>
                                <span className="text-green-400">Active</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Account Type:</span>
                                <span>Standard</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            onClick={handleLogout}
                            className="w-full px-4 py-3 rounded-md bg-[#5C53BC] hover:bg-[#8B80FF] text-white font-medium transition-colors duration-200"
                        >
                            Log out
                        </button>
                    </div>

                </div>
            </main>

        </div>
    );
}