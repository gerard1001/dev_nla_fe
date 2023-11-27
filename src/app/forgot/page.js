import React from 'react'
import Link from 'next/link'
const page = () => {
    return (
        <div>
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10 loginpage">
      
      <div className="flex shadow-md">
        
        <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{width:' 24rem', height: '100%'}}>
          <div className="w-80">
                <center>
    
                <img className='h-[100px] ' src='/logo.png' />
    
                </center>
            

            <div className='shadow-md w-full p-3 rounded-md'>
            <center><h2 className='text-black text-xl font-bold opacity-70'>Forgot Password?</h2></center>
            <h1 className=" text-black-900 text-center text-sm font-semibold">Enter your email, and we'll send you instructions to reset your password</h1>
            <div className="mb-3">
      <div className="flex my-3">
        <div className="flex items-center flex-basis-10  border border-gray-300 rounded-l-md px-3">
         
          <span className="text-gray-500 text-sm">Icon</span>
        </div>
        <input
          type="tel"
          placeholder=" Enter your phone number"
          className="flex-1  rounded-r-md border border-gray-300 focus:border-rgba(27, 165, 132, 1)-700 focus:outline-none focus:ring-1 focus:ring-rgba(27, 165, 132, 1)-700 py-2 px-[2px] text-gray-500"
        />
      </div>
    </div>
           <button className='mb-1.5 block w-full text-center text-white bg-blue-800 hover:bg-blue-900 px-2 py-1.5 rounded-md'>Resend the link</button>
           
           <center>
           <Link href="/login">
          <span className=' spanresend'>  Back to Login</span>
          </Link>
           </center>
           
            </div>
         

    
    
           
          </div>
        </div>
    
        <div className="flex flex-wrap content-center justify-center rounded-r-md" style={{width: '24rem', height: '100%'}}>
        <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src="/nlalogin.png" />
        </div>
    
      </div>
    
      <div className="mt-3 w-full">
      </div>
    </div>
        </div>
      )
}

export default page