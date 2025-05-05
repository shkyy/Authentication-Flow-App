'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import loginImg from '../../public/login-image.png';
import logoImg from '../../public/LOGO.png';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

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
          
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium">Email Address</label>
              <div className="mt-2">
                <input id="email" placeholder="Enter your email address" type="email" name="email" className="block w-full rounded-md bg-gray-900 outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-50 sm:text-sm/6"/>
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm/6 font-medium">Password</label>
              <div className="mt-2">
                <input id="password" placeholder="Enter your password" type="password" name="password" className="block w-full rounded-md bg-gray-900 outline-1 -outline-offset-1 outline-gray-500 placeholder:text-gray-50 sm:text-sm/6"/>
              </div>
            </div>

            <button type="submit" className="w-full bg-[#5C53BC] hover:bg-[#8B80FF]">
              Sign in
            </button>

            <button className="w-full bg-white text-black">
              Sign in with Google
            </button>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-400 mt-2 gap-2">
              <div className="flex items-center gap-2">
                <input id="checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember for 30 days</label>
              </div>
              <a href="#" className="hover:underline text-[#8B80FF]">Forgot Password?</a>
            </div>

            <div className="text-center text-sm text-gray-400 mt-6">
              Doesn't have an account? <a href="#" className="text-white font-medium underline">Sign up</a>
            </div>
          </form>
        </div>
      </div>

      <div className="flex-1 hidden md:flex items-center justify-center p-6 mt-2">
        <Image src={loginImg} alt="Login Image" width={600} height={600}/>
        <div className="max-w-md bg-transparent border-none shadow-none">
        <blockquote className="font-semibold text-lg">
        “We love the screen sharing and whiteboarding features, which have improved our presentations. Room.me has become an essential tool for our team, allowing us to collaborate effectively. Highly recommended!”
        </blockquote>
        <p className="mt-4 text-sm">Sarah Markivoc - Project Manager</p>
        </div>

      </div>
    </div>
  )
}