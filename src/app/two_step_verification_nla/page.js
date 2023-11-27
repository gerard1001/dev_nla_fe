import React from 'react'
import Link from 'next/link'

const page = () => {
const number = ("079*****46")
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
            <center><h2 className='text-black text-xl font-bold opacity-70'>Two step verification</h2></center>
            <h1 className=" text-black-900 text-center text-sm font-semibold">We sent a verification code to your mobile  {number}     . Enter the code from the mobile in the field below.</h1>
            <div className="mb-3">
      <div className="flex my-3">
      <input
          type="tel"
          placeholder=" "
          
          className="flex-1 mr-3  rounded-md border border-gray-300 focus:border-rgba(27, 165, 132, 1)-700 focus:outline-none focus:ring-1 focus:ring-rgba(27, 165, 132, 1)-700 py-2 px-[2px] w-10 text-gray-500"
        />
         <input
          type="tel"
          placeholder=" "
          
          className="flex-1 mr-3  rounded-md border border-gray-300 focus:border-rgba(27, 165, 132, 1)-700 focus:outline-none focus:ring-1 focus:ring-rgba(27, 165, 132, 1)-700 py-2 px-[2px] w-10 text-gray-500"
        />
          <input
          type="tel"
          placeholder=" "
          
          className="flex-1 mr-3  rounded-md border border-gray-300 focus:border-rgba(27, 165, 132, 1)-700 focus:outline-none focus:ring-1 focus:ring-rgba(27, 165, 132, 1)-700 py-2 px-[2px] w-10 text-gray-500"
        />
         <input
          type="tel"
          placeholder=" "
          
          className="flex-1 mr-3  rounded-md border border-gray-300 focus:border-rgba(27, 165, 132, 1)-700 focus:outline-none focus:ring-1 focus:ring-rgba(27, 165, 132, 1)-700 py-2 px-[2px] w-10 text-gray-500"
        />
           <input
          type="tel"
          placeholder=" "
          
          className="flex-1 mr-3  rounded-md border border-gray-300 focus:border-rgba(27, 165, 132, 1)-700 focus:outline-none focus:ring-1 focus:ring-rgba(27, 165, 132, 1)-700 py-2 px-[2px] w-10 text-gray-500"
        />
           <input
          type="tel"
          placeholder=" "
          
          className="flex-1 mr-3  rounded-md border border-gray-300 focus:border-rgba(27, 165, 132, 1)-700 focus:outline-none focus:ring-1 focus:ring-rgba(27, 165, 132, 1)-700 py-2 px-[2px] w-10 text-gray-500"
        />
      </div>
    </div>
           <button className='mb-1.5 block w-full text-center text-white bg-blue-800 hover:bg-blue-900 px-2 py-1.5 rounded-md'>Verify my account</button>
           
           <center>
           <p>Did not get the coode?  <Link href="/login">
          <span className='spanresend'>Resend</span>
          </Link></p>
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