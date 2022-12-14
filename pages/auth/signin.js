import React from 'react'
import { getProviders, signIn } from "next-auth/react";


// client side
export default function signin({ providers }) {
  return (
    <div className='flex justify-center mt-20 space-x-4'>
        <div className=''>
            {Object.values(providers).map((provider) => (
                <div key={provider.name} className='flex flex-col items-center'>
                    <img className='w-36 object-cover' src='/twitter_logo.jpg' alt='Twitter-logo' />
                    <p className='text-center text-sm italic my-10'>This app is only for educational purposes.</p>
                    <button onClick={() => signIn(provider.id, {callbackUrl: "/"})} className='bg-red-400 rounded-lg p-3 text-white hover:bg-red-500'>Sign in with {provider.name}</button>
                </div>
            ))}
        </div>
    </div>
  )
}


// server side
export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {
            providers,
        },
    };
}