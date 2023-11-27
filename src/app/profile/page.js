'use client';
import React from 'react'
import { AuthContext } from '../ContextAPI/Controller';
import { useContext } from 'react';
const page = () => {
    
    const { user } = useContext(AuthContext);
    console.log(user);
    const router = "";

    return (
        <div>
       <div>
        <h3 className='flex mb-1'><svg height={26} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.1992 12C12.9606 12 15.1992 9.76142 15.1992 7C15.1992 4.23858 12.9606 2 10.1992 2C7.43779 2 5.19922 4.23858 5.19922 7C5.19922 9.76142 7.43779 12 10.1992 12Z" stroke={`${
                  router === '/users' ? "white": "#1C274C"}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M1 22C1.57038 20.0332 2.74795 18.2971 4.36438 17.0399C5.98081 15.7827 7.95335 15.0687 10 15C14.12 15 17.63 17.91 19 22" stroke={`${
                    router === '/users' ? "white": "#1C274C"}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.8205 4.44006C18.5822 4.83059 19.1986 5.45518 19.579 6.22205C19.9594 6.98891 20.0838 7.85753 19.9338 8.70032C19.7838 9.5431 19.3674 10.3155 18.7458 10.9041C18.1243 11.4926 17.3302 11.8662 16.4805 11.97" stroke={`${
                  router === '/users' ? "white": "#1C274C"}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.3203 14.5701C18.6543 14.91 19.8779 15.5883 20.8729 16.5396C21.868 17.4908 22.6007 18.6827 23.0003 20" stroke={`${
                    router === '/users' ? "white": "#1C274C"}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> Profile</h3>
        </div>
            <div className='grid grid-cols-3   gap-3'>

                <div className='bg-white p-6 col-span-2 rounded-md '>
                    <h3 className='text-2xl font-bold pb-3'>Your profile info</h3>
                    <div className='flex mb-5'>

                        <img style={{ borderRadius: 10 }} src='https://switchiify.net.rw/u/assets/img/profile.png' className='h-[100px] rounded-fill' />
                        <div className='px-5'   >
                               <h3 className='text-3xl font-bold text-gray-700'>{user?.firstname} {user?.lastname} {user?'':'Loading...'}</h3>
                            <p className='text-gray-500 text-lg'>Email: {user?.email} {user?'':'Loading...'}</p>
                            <p className='text-gray-500 text-lg'>Phone: {user?.phone} {user?'':'Loading...'}</p>
                            <p className='text-blue-500 text-lg font-bold'>Role: {user?.role?.label || user?.role} {user?'':'Loading...'}</p>

                        <button  className='py-[-20px] m-0 px-[8px] h-[47px] bg-blue-500 rounded-full text-white'>
                           Edit profile
                        </button>

                        <button style={{background:"rgba(25, 152, 85, 0.25)"}}  className='py-[-25px] dark:text-green-900  ml-5 px-[8px] h-[40px]  rounded-full '>
                            Active
                        </button>
                          
                            <p>Allowed JPG, GIF or PNG. Max size of 800KB
</p>
                        </div>
                     
                       
                        
                    </div>
                    <hr />
            
                    </div>
                <div className='bg-white col-span-1 rounded-md p-4 '>
                    <h3 className='text-2xl font-bold '>Deactive Account</h3>

                    <div className="flex items-center p-4  mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-white-800 dark:text-red-400 dark:border-red-800" role="alert">
                        <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <div>
                            <span className="font-bold">Are you sure you want to delete your account?</span>
                            <p className='text-yellow-500'>
                                Once you deactivate your account,  there is no going back.Please be certain.

                            </p>

                        </div>
                    </div>

                    <div className="flex items-start mb-6">
                            <div className="flex items-center">
                                <input style={{ background: "#E8F6F3" }} id="remember" type="checkbox" value="" className="w-4 h-4 border border-#E8F6F3-300 rounded bg-#E8F6F3-50 focus:ring-3 focus:ring-blue-300 dark:bg-#E8F6F3-700 dark:border-#E8F6F3-600 dark:focus:ring-blue-600 dark:ring-offset-#E8F6F3-800" required />
                            </div>
                            <label for="remember" className="ms-2 text-sm font-medium text-#E8F6F3-900 dark:text-#E8F6F3-300">I confirm with my account deactivation </label>
                        </div>  

                        <button  className='py-3 px-5 bg-red-500 rounded-md text-white'>
                            Deactivate Account
                        </button>

                </div>

            </div>

        </div>
    )
}

export default page