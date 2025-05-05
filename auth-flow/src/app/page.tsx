'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import loginImg from '../../public/login-image.png';
import logoImg from '../../public/LOGO.png';
import { useAuthStore } from "@/store/authStore";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const { login, error, status, clearError } = useAuthStore();

  const validateForm = (): boolean => {
    let isValid = true;
    const errors = { email: '', password: '' };

    // clear errors
    clearError();

    // validate email
    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // validate password
    if (!password) {
      errors.password = 'Password is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (validateForm() ) {
      await login(email, password);
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-black text-white">
      <div className="justify-center px-8 py-10 md:px-20 flex flex-col flex-1">
      <div className="max-w-xl w-full mx-auto">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
              <Image src={logoImg} alt="Room.me LOGO" width={130} height={130}/>
            </div>
          </div>
          <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Welcome back to Room.me!</h1>
          <p className="text-gray-400 text-base">Room.me is an innovative video conference product that revolutionizes virtual meetings.</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
              <div className="mt-2">
                <input 
                  id="email" 
                  placeholder="Enter your email address" 
                  type="email" 
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 outline-none focus:ring-2 focus:ring-[#8B80FF] placeholder:text-gray-500 sm:text-sm"
                  required
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-400">{formErrors.email}</p>
                )}
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium">Password</label>
              <div className="mt-2">
              <input 
                  id="password" 
                  placeholder="Enter your password" 
                  type="password" 
                  name="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 outline-none focus:ring-2 focus:ring-[#8B80FF] placeholder:text-gray-500 sm:text-sm"
                  required
                />
              </div>
              {formErrors.password && (
                <p className="mt-1 text-sm text-red-400">{formErrors.password}</p>
              )}
            </div>

            {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className='w-full px-4 py-1 rounded-md bg-[#5C53BC] hover:bg-[#8B80FF] text-white font-medium transition-colors duration-200 flex justify-center items-center opacity-80 cursor-pointer'
            >
              {status === 'loading' ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : null}
              Sign in
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black text-gray-400">Or continue with</span>
              </div>
            </div>

            <button 
              type="button" 
              className="w-full px-4 py-3 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM15.5 8C14.1193 8 13 9.11929 13 10.5C13 11.8807 14.1193 13 15.5 13C16.8807 13 18 11.8807 18 10.5C18 9.11929 16.8807 8 15.5 8ZM8.5 8C7.11929 8 6 9.11929 6 10.5C6 11.8807 7.11929 13 8.5 13C9.88071 13 11 11.8807 11 10.5C11 9.11929 9.88071 8 8.5 8ZM12 17.5C9.30761 17.5 6.9934 16.0926 5.87868 14H18.1213C17.0066 16.0926 14.6924 17.5 12 17.5Z" fill="currentColor"></path>
              </svg>
              Sign in with Google
            </button>

            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center">
                <input 
                  id="rememberMe" 
                  type="checkbox" 
                  className="h-4 w-4 text-[#5C53BC] focus:ring-[#8B80FF] bg-gray-900 border-gray-700 rounded"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-400">
                  Remember for 30 days
                </label>
              </div>
              <a href="#" className="font-medium text-[#8B80FF] hover:text-[#9d96ff] transition-colors">
                Forgot Password?
              </a>
            </div>

            <div className="text-center text-sm text-gray-400 mt-8">
              Don&apos;t have an account?{' '}
              <a href="#" className="text-white font-medium hover:text-[#8B80FF] transition-colors">
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="flex-1 hidden md:flex flex-col items-center justify-center p-10 relative bg-opacity-30">
        <div className="relative max-w-lg">
          <Image 
            src={loginImg} 
            alt="Room.me Conference" 
            width={600} 
            height={600}
            className="rounded-lg shadow-2xl"
            priority
          />
          
          <div className="absolute bottom-3 left-8 flex flex-col items-center justify-center text-center max-w-md bg-transparent bg-opacity-80 backdrop-blur-sm p-6 rounded-lg border-none shadow-xl">
            <blockquote className="font-semibold text-lg">
              &ldquo;We love the screen sharing and whiteboarding features, which have improved our presentations. Room.me has become an essential tool for our team, allowing us to collaborate effectively. Highly recommended!&rdquo;
            </blockquote>
            <div className="mt-4 flex items-center gap-3">
              <p className="text-md font-medium">
               Sarah Markivoc - Project Manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}