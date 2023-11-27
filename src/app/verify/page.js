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
            <center><h2 className='text-black text-xl font-bold opacity-70'>Check your email</h2></center>
            <h1 className=" text-black-900 text-center text-sm font-semibold">Password reset sent to your email address: mubaptist@dtec.rw</h1>
            <Link href="/login">
          <span className='spansign'>Please follow the link to continue</span>
          </Link>
           <button className='mb-1.5 block w-full text-center text-white bg-blue-800 hover:bg-blue-900 px-2 py-1.5 rounded-md'>Skip for now</button>
            <p>Did not get the email?  <Link href="/login">
          <span className='spanresend'>Resend</span>
          </Link></p>
           
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