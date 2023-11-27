import React from 'react'

const All = () => {
  return (
    <div>
      <div className='grid grid-3'>

        <div className="bg-white flex flex-row">
          <div>

          </div>
          <div>

          </div>
        </div>
        <div></div>
        <div></div>



      </div>

      <div className='grid grid-cols-3 gap-3'>
        <div >
          <h1 className='text-xl my-1'>New cases <span style={{ background: "rgba(234, 179, 8, 0.1)", borderRadius: 20 }} className='text-yellow-600  font-bold py-1 fw-bold px-3 '>5</span></h1>
          <div className='bg-white p-3 rounded-md mb-10'>
            <div className='grid grid-cols-2'>
              <h2 className='text-lg'> Case Name A </h2>
              <div className='ml-auto flex'>
                <svg height={30} viewBox="0 0 24 24" fill="rgba(51, 191, 255, 1)" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 19L17 21L21 17M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H11.5M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V13.4M9 17H11.5M9 13H15M9 9H10" stroke="rgba(51, 191, 255, 1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <p className='text-xl px-2'>1</p></div>
            </div>
            <ul className='flex my-2'>
              <li style={{ borderRadius: 50 }} className='border border-gray-500 py-2 px-3 font-bold'>New</li>
              <li style={{ borderRadius: 50, background: "rgba(236, 72, 153, 0.1)" }} className=' py-2 text-red-700 px-3 ml-1 font-bold'>Un assigned</li>
              <li style={{ borderRadius: 50, background: "rgba(234, 179, 8, 0.1)", color: "rgba(202, 138, 4, 1)" }} className=' py-2 text-red-700 font-bold px-3 ml-1'>Pending</li>
            </ul>
            <div className='grid grid-cols-2 mt-5'>
              <div className='mr-auto  '>
                <ul className='grid grid-cols-4'>
                  <li>
                    <img style={{ borderRadius: 50 }} src='https://switchiify.net.rw/u/assets/img/profile.png' className='h-[50px] w-[70px] rounded-fill' />
                  </li>

                  <li className='ml-[-10px]'><img style={{ borderRadius: 50 }} src='https://switchiify.net.rw/u/classes/profile/IMG-20221222-WA0014.jpeg' className='h-[50px] w-[50px] rounded-fill' />
                  </li>
                  <li style={{ borderRadius: 50 }} className='ml-[-20px] h-[50px] w-[50px] text-center p-3 bg-gray-500 text-center text-white rounded-fill' >
                    <p className='text-xl'>5+</p>
                  </li>
                  <li style={{ borderRadius: 50, border: "5px dotted #5f5959" }} className=' ml-3 pr-11 bg-white  ml-1 text-center  rounded-fill'>
                    <svg height={40} width={40} viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#5f5959"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.288"></g><g id="SVGRepo_iconCarrier"> <g id="style=linear"> <g id="add"> <path id="vector" d="M11.998 5.84424L11.998 18.1604" stroke="#919191" stroke-width="1.2" stroke-linecap="round"></path> <path id="vector_2" d="M18.1561 12.002L5.83998 12.0019" stroke="#919191" stroke-width="1.2" stroke-linecap="round"></path> </g> </g> </g></svg>            </li>
                </ul>
              </div>

              <div className='ml-auto'>

                <ul className='flex justify-center  items-center my-3'>
                  <li className='flex mr-1'><svg height={25} viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="rgba(168, 85, 247, 1)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd" clip-rule="evenodd"> <path d="M5.113-.026c-2.803 0-5.074 2.272-5.074 5.074v53.841c0 2.803 2.271 5.074 5.074 5.074h45.773c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.901-20.31h-31.946z" fill="rgba(168, 85, 247, 1)"></path> <path d="M55.977 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="rgba(168, 85, 247, 1)"></path> <path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5" fill="#ffffff"></path> </g> <path d="M26.6 41.467c1.134-1.134 1.134-2.986 0-4.12s-2.986-1.134-4.12 0l-9.167 9.167c-1.134 1.134-1.134 2.986 0 4.12s2.986 1.134 4.12 0l5.625-5.602c.324-.324.324-.856 0-1.181s-.856-.324-1.181 0l-3.542 3.519c-.486.509-1.273.509-1.759 0-.509-.486-.509-1.273 0-1.759l3.519-3.542c1.319-1.296 3.426-1.296 4.722 0 1.296 1.319 1.296 3.426 0 4.722l-5.625 5.625c-2.106 2.106-5.532 2.106-7.662 0-2.106-2.129-2.106-5.555 0-7.662l9.166-9.167c2.13-2.129 5.556-2.129 7.662 0 2.129 2.106 2.129 5.532 0 7.662l-.903.902c-.046-.926-.37-1.829-.926-2.616l.071-.068z" fill="#ffffff"></path> </g></svg> <span className='text-lg mx-1'> 2</span></li>
                  <li className='flex mr-1'><svg height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z" stroke="rgba(202, 138, 4, 1)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 9.5H17" stroke="rgba(202, 138, 4, 1)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 14.5H14" stroke="rgba(202, 138, 4, 1)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <span className='text-lg mx-1'> 2</span></li>
                </ul>
              </div>
            </div>

          </div>


          {/* SECOND */}
          <div className='bg-white p-3 rounded-md mb-10'>
            <div className='grid grid-cols-2'>
              <h2 className='text-lg'> Case Name A </h2>
              <div className='ml-auto flex'>
                <svg height={30} viewBox="0 0 24 24" fill="rgba(51, 191, 255, 1)" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 19L17 21L21 17M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H11.5M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V13.4M9 17H11.5M9 13H15M9 9H10" stroke="rgba(51, 191, 255, 1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <p className='text-xl px-2'>1</p></div>
            </div>
            <ul className='flex my-2'>
              <li style={{ borderRadius: 50 }} className='border border-gray-500 py-2 px-3 font-bold'>New</li>
              <li style={{ borderRadius: 50, background: "rgba(236, 72, 153, 0.1)" }} className=' py-2 text-red-700 font-bold px-3 ml-1'>Un assigned</li>
              <li style={{ borderRadius: 50, background: "rgba(234, 179, 8, 0.1)", color: "rgba(202, 138, 4, 1)" }} className=' py-2 text-red-700 px-3 ml-1 font-bold'>Pending</li>
            </ul>
            <div className='grid grid-cols-2 mt-5'>
              <div className='mr-auto  '>
                <ul className='grid grid-cols-4'>
                  <li>
                    <img style={{ borderRadius: 50 }} src='https://switchiify.net.rw/u/assets/img/profile.png' className='h-[50px] w-[70px] rounded-fill' />
                  </li>

                  <li className='ml-[-10px]'><img style={{ borderRadius: 50 }} src='https://switchiify.net.rw/u/classes/profile/IMG-20221222-WA0014.jpeg' className='h-[50px] w-[50px] rounded-fill' />
                  </li>
                  <li style={{ borderRadius: 50 }} className='ml-[-20px] h-[50px] w-[50px] text-center p-3 bg-gray-500 text-center text-white rounded-fill' >
                    <p className='text-xl'>5+</p>
                  </li>
                  <li style={{ borderRadius: 50, border: "5px dotted #5f5959" }} className=' ml-3 pr-11 bg-white  ml-1 text-center  rounded-fill'>
                    <svg height={40} width={40} viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#5f5959"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.288"></g><g id="SVGRepo_iconCarrier"> <g id="style=linear"> <g id="add"> <path id="vector" d="M11.998 5.84424L11.998 18.1604" stroke="#919191" stroke-width="1.2" stroke-linecap="round"></path> <path id="vector_2" d="M18.1561 12.002L5.83998 12.0019" stroke="#919191" stroke-width="1.2" stroke-linecap="round"></path> </g> </g> </g></svg>            </li>
                </ul>
              </div>

              <div className='ml-auto'>

                <ul className='flex justify-center  items-center my-3'>
                  <li className='flex mr-1'><svg height={25} viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd" clip-rule="evenodd"> <path d="M5.113-.026c-2.803 0-5.074 2.272-5.074 5.074v53.841c0 2.803 2.271 5.074 5.074 5.074h45.773c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.901-20.31h-31.946z" fill="#a2b0be"></path> <path d="M55.977 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="#b4c2cf"></path> <path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5" fill="#ffffff"></path> </g> <path d="M26.6 41.467c1.134-1.134 1.134-2.986 0-4.12s-2.986-1.134-4.12 0l-9.167 9.167c-1.134 1.134-1.134 2.986 0 4.12s2.986 1.134 4.12 0l5.625-5.602c.324-.324.324-.856 0-1.181s-.856-.324-1.181 0l-3.542 3.519c-.486.509-1.273.509-1.759 0-.509-.486-.509-1.273 0-1.759l3.519-3.542c1.319-1.296 3.426-1.296 4.722 0 1.296 1.319 1.296 3.426 0 4.722l-5.625 5.625c-2.106 2.106-5.532 2.106-7.662 0-2.106-2.129-2.106-5.555 0-7.662l9.166-9.167c2.13-2.129 5.556-2.129 7.662 0 2.129 2.106 2.129 5.532 0 7.662l-.903.902c-.046-.926-.37-1.829-.926-2.616l.071-.068z" fill="#ffffff"></path> </g></svg> <span className='text-lg mx-1'> 2</span></li>
                  <li className='flex mr-1'><svg height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 9.5H17" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 14.5H14" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <span className='text-lg mx-1'> 2</span></li>
                </ul>
              </div>
            </div>

          </div>
          {/* THIRD */}
          <div className='bg-white p-3 rounded-md'>
            <div className='grid grid-cols-2'>
              <h2 className='text-lg'> Case Name A </h2>
              <div className='ml-auto flex'>
                <svg height={30} viewBox="0 0 24 24" fill="rgba(51, 191, 255, 1)" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 19L17 21L21 17M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H11.5M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V13.4M9 17H11.5M9 13H15M9 9H10" stroke="rgba(51, 191, 255, 1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <p className='text-xl px-2'>1</p></div>
            </div>
            <ul className='flex my-2'>
              <li style={{ borderRadius: 50 }} className='border border-gray-500 py-2 px-3 font-bold'>New</li>
              <li style={{ borderRadius: 50, background: "rgba(236, 72, 153, 0.1)" }} className=' py-2 text-red-700 px-3 ml-1 font-bold'>Un assigned</li>
              <li style={{ borderRadius: 50, background: "rgba(234, 179, 8, 0.1)", color: "rgba(202, 138, 4, 1)" }} className=' py-2 text-red-700 px-3 ml-1 font-bold'>Pending</li>
            </ul>
            <div className='grid grid-cols-2 mt-5'>
              <div className='mr-auto  '>
                <ul className='grid grid-cols-4'>
                  <li>
                    <img style={{ borderRadius: 50 }} src='https://switchiify.net.rw/u/assets/img/profile.png' className='h-[50px] w-[70px] rounded-fill' />
                  </li>

                  <li className='ml-[-10px]'><img style={{ borderRadius: 50 }} src='https://switchiify.net.rw/u/classes/profile/IMG-20221222-WA0014.jpeg' className='h-[50px] w-[50px] rounded-fill' />
                  </li>
                  <li style={{ borderRadius: 50 }} className='ml-[-20px] h-[50px] w-[50px] text-center p-3 bg-gray-500 text-center text-white rounded-fill' >
                    <p className='text-xl'>5+</p>
                  </li>
                  <li style={{ borderRadius: 50, border: "5px dotted #5f5959" }} className=' ml-3 pr-11 bg-white  ml-1 text-center  rounded-fill'>
                    <svg height={40} width={40} viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#5f5959"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.288"></g><g id="SVGRepo_iconCarrier"> <g id="style=linear"> <g id="add"> <path id="vector" d="M11.998 5.84424L11.998 18.1604" stroke="#919191" stroke-width="1.2" stroke-linecap="round"></path> <path id="vector_2" d="M18.1561 12.002L5.83998 12.0019" stroke="#919191" stroke-width="1.2" stroke-linecap="round"></path> </g> </g> </g></svg>            </li>
                </ul>
              </div>

              <div className='ml-auto'>

                <ul className='flex justify-center  items-center my-3'>
                  <li className='flex mr-1'><svg height={25} viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd" clip-rule="evenodd"> <path d="M5.113-.026c-2.803 0-5.074 2.272-5.074 5.074v53.841c0 2.803 2.271 5.074 5.074 5.074h45.773c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.901-20.31h-31.946z" fill="#a2b0be"></path> <path d="M55.977 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="#b4c2cf"></path> <path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5" fill="#ffffff"></path> </g> <path d="M26.6 41.467c1.134-1.134 1.134-2.986 0-4.12s-2.986-1.134-4.12 0l-9.167 9.167c-1.134 1.134-1.134 2.986 0 4.12s2.986 1.134 4.12 0l5.625-5.602c.324-.324.324-.856 0-1.181s-.856-.324-1.181 0l-3.542 3.519c-.486.509-1.273.509-1.759 0-.509-.486-.509-1.273 0-1.759l3.519-3.542c1.319-1.296 3.426-1.296 4.722 0 1.296 1.319 1.296 3.426 0 4.722l-5.625 5.625c-2.106 2.106-5.532 2.106-7.662 0-2.106-2.129-2.106-5.555 0-7.662l9.166-9.167c2.13-2.129 5.556-2.129 7.662 0 2.129 2.106 2.129 5.532 0 7.662l-.903.902c-.046-.926-.37-1.829-.926-2.616l.071-.068z" fill="#ffffff"></path> </g></svg> <span className='text-lg mx-1'> 2</span></li>
                  <li className='flex mr-1'><svg height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 9.5H17" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 14.5H14" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <span className='text-lg mx-1'> 2</span></li>
                </ul>
              </div>
            </div>

          </div>

          <div className="flex items-center justify-center my-3 rounded-md">
            <button className="flex bg-white hover:bg-gray-200 items-center justify-center text-center py-1 w-full">
              <svg height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="#1C274C"></path> </g></svg></button>
          </div>
        </div>

        <div >
          <h1 className='text-xl my-1'>New cases <span style={{ background: "rgba(234, 179, 8, 0.1)", borderRadius: 20 }} className='text-yellow-600  font-bold py-1 fw-bold px-3 '>3</span></h1>

          <div className='bg-white p-3 rounded-md'>
            <div className='grid grid-cols-2'>
              <h2 className='text-lg'> Case Name A </h2>
              <div className='ml-auto flex'>
                <svg height={30} viewBox="0 0 24 24" fill="rgba(51, 191, 255, 1)" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 19L17 21L21 17M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H11.5M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V13.4M9 17H11.5M9 13H15M9 9H10" stroke="rgba(51, 191, 255, 1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <p className='text-xl px-2'>1</p></div>
            </div>
            <ul className='flex my-2'>
              <li style={{ borderRadius: 50 }} className='border border-gray-500 py-2 px-3 font-bold'>New</li>
              <li style={{ borderRadius: 50, background: "rgba(236, 72, 153, 0.1)" }} className=' py-2 text-red-700 px-3 ml-1 font-bold'>Un assigned</li>
              <li style={{ borderRadius: 50, background: "rgba(234, 179, 8, 0.1)", color: "rgba(202, 138, 4, 1)" }} className=' py-2 text-red-700 px-3 ml-1 font-bold'>Pending</li>
            </ul>
            <div className='grid grid-cols-2 mt-5'>
              <div className='mr-auto  '>
                <ul className='grid grid-cols-4'>
                  <li>
                    <svg height={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z" stroke="#1C274C" stroke-width="1.5"></path> <path opacity="0.5" d="M7 4V2.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path opacity="0.5" d="M17 4V2.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path opacity="0.5" d="M2 9H22" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                  </li>



                  <li className='mt-1'>Mar 14 </li>
                  <li></li>
                </ul>
              </div>

              <div className='ml-auto'>

                <ul className='flex justify-center  items-center my-3'>
                  <li className='flex mr-1'><svg height={25} viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd" clip-rule="evenodd"> <path d="M5.113-.026c-2.803 0-5.074 2.272-5.074 5.074v53.841c0 2.803 2.271 5.074 5.074 5.074h45.773c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.901-20.31h-31.946z" fill="#a2b0be"></path> <path d="M55.977 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="#b4c2cf"></path> <path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5" fill="#ffffff"></path> </g> <path d="M26.6 41.467c1.134-1.134 1.134-2.986 0-4.12s-2.986-1.134-4.12 0l-9.167 9.167c-1.134 1.134-1.134 2.986 0 4.12s2.986 1.134 4.12 0l5.625-5.602c.324-.324.324-.856 0-1.181s-.856-.324-1.181 0l-3.542 3.519c-.486.509-1.273.509-1.759 0-.509-.486-.509-1.273 0-1.759l3.519-3.542c1.319-1.296 3.426-1.296 4.722 0 1.296 1.319 1.296 3.426 0 4.722l-5.625 5.625c-2.106 2.106-5.532 2.106-7.662 0-2.106-2.129-2.106-5.555 0-7.662l9.166-9.167c2.13-2.129 5.556-2.129 7.662 0 2.129 2.106 2.129 5.532 0 7.662l-.903.902c-.046-.926-.37-1.829-.926-2.616l.071-.068z" fill="#ffffff"></path> </g></svg> <span className='text-lg mx-1'> 2</span></li>
                  <li className='flex mr-1'><svg height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 9.5H17" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 14.5H14" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <span className='text-lg mx-1'> 2</span></li>
                </ul>
              </div>
            </div>

          </div>

          <div className="flex items-center justify-center my-3 rounded-md">
            <button className="flex bg-white hover:bg-gray-200 items-center justify-center text-center py-1 w-full">
              <svg height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="#1C274C"></path> </g></svg></button>
          </div>
        </div>


        <div >
          <h1 className='text-xl my-1'>New cases <span style={{ background: "rgba(234, 179, 8, 0.1)", borderRadius: 20 }} className='text-yellow-600  font-bold py-1 fw-bold px-3 '>5</span></h1>



          {/* SECOND */}
          <div className='bg-white p-3 rounded-md mb-10'>
            <div className='grid grid-cols-2'>
              <h2 className='text-lg'> Case Name A </h2>
              <div className='ml-auto flex'>
                <svg height={30} viewBox="0 0 24 24" fill="rgba(51, 191, 255, 1)" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 19L17 21L21 17M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H11.5M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V13.4M9 17H11.5M9 13H15M9 9H10" stroke="rgba(51, 191, 255, 1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <p className='text-xl px-2'>1</p></div>
            </div>
            <ul className='flex my-2'>
              <li style={{ borderRadius: 50 }} className='border border-gray-500 py-2 px-3 font-bold'>New</li>
              <li style={{ borderRadius: 50, background: "rgba(236, 72, 153, 0.1)" }} className=' py-2 text-red-700 font-bold px-3 ml-1'>Un assigned</li>
              <li style={{ borderRadius: 50, background: "rgba(234, 179, 8, 0.1)", color: "rgba(202, 138, 4, 1)" }} className=' py-2 text-red-700 px-3 ml-1 font-bold'>Pending</li>
            </ul>
            <div className='grid grid-cols-2 mt-5'>
              <div className='mr-auto  '>
                <ul className='grid grid-cols-4'>
                  <li>
                    <img style={{ borderRadius: 50 }} src='https://switchiify.net.rw/u/assets/img/profile.png' className='h-[50px] w-[70px] rounded-fill' />
                  </li>

                  <li className='ml-[-10px]'><img style={{ borderRadius: 50 }} src='https://switchiify.net.rw/u/classes/profile/IMG-20221222-WA0014.jpeg' className='h-[50px] w-[50px] rounded-fill' />
                  </li>
                  <li style={{ borderRadius: 50 }} className='ml-[-20px] h-[50px] w-[50px] text-center p-3 bg-gray-500 text-center text-white rounded-fill' >
                    <p className='text-xl'>5+</p>
                  </li>
                  <li style={{ borderRadius: 50, border: "5px dotted #5f5959" }} className=' ml-3 pr-11 bg-white  ml-1 text-center  rounded-fill'>
                    <svg height={40} width={40} viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#5f5959"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.288"></g><g id="SVGRepo_iconCarrier"> <g id="style=linear"> <g id="add"> <path id="vector" d="M11.998 5.84424L11.998 18.1604" stroke="#919191" stroke-width="1.2" stroke-linecap="round"></path> <path id="vector_2" d="M18.1561 12.002L5.83998 12.0019" stroke="#919191" stroke-width="1.2" stroke-linecap="round"></path> </g> </g> </g></svg>            </li>
                </ul>
              </div>

              <div className='ml-auto'>

                <ul className='flex justify-center  items-center my-3'>
                  <li className='flex mr-1'><svg height={25} viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd" clip-rule="evenodd"> <path d="M5.113-.026c-2.803 0-5.074 2.272-5.074 5.074v53.841c0 2.803 2.271 5.074 5.074 5.074h45.773c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.901-20.31h-31.946z" fill="#a2b0be"></path> <path d="M55.977 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="#b4c2cf"></path> <path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5" fill="#ffffff"></path> </g> <path d="M26.6 41.467c1.134-1.134 1.134-2.986 0-4.12s-2.986-1.134-4.12 0l-9.167 9.167c-1.134 1.134-1.134 2.986 0 4.12s2.986 1.134 4.12 0l5.625-5.602c.324-.324.324-.856 0-1.181s-.856-.324-1.181 0l-3.542 3.519c-.486.509-1.273.509-1.759 0-.509-.486-.509-1.273 0-1.759l3.519-3.542c1.319-1.296 3.426-1.296 4.722 0 1.296 1.319 1.296 3.426 0 4.722l-5.625 5.625c-2.106 2.106-5.532 2.106-7.662 0-2.106-2.129-2.106-5.555 0-7.662l9.166-9.167c2.13-2.129 5.556-2.129 7.662 0 2.129 2.106 2.129 5.532 0 7.662l-.903.902c-.046-.926-.37-1.829-.926-2.616l.071-.068z" fill="#ffffff"></path> </g></svg> <span className='text-lg mx-1'> 2</span></li>
                  <li className='flex mr-1'><svg height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 9.5H17" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 14.5H14" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <span className='text-lg mx-1'> 2</span></li>
                </ul>
              </div>
            </div>

          </div>
          {/* THIRD */}
          <div className='bg-white p-3 rounded-md'>
            <div className='grid grid-cols-2'>
              <h2 className='text-lg'> Case Name A </h2>
              <div className='ml-auto flex'>
                <svg height={30} viewBox="0 0 24 24" fill="rgba(51, 191, 255, 1)" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 19L17 21L21 17M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H11.5M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V13.4M9 17H11.5M9 13H15M9 9H10" stroke="rgba(51, 191, 255, 1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <p className='text-xl px-2'>1</p></div>
            </div>
            <ul className='flex my-2'>
              <li style={{ borderRadius: 50 }} className='border border-gray-500 py-2 px-3 font-bold'>New</li>
              <li style={{ borderRadius: 50, background: "rgba(236, 72, 153, 0.1)" }} className=' py-2 text-red-700 px-3 ml-1 font-bold'>Un assigned</li>
              <li style={{ borderRadius: 50, background: "rgba(234, 179, 8, 0.1)", color: "rgba(202, 138, 4, 1)" }} className=' py-2 text-red-700 px-3 ml-1 font-bold'>Pending</li>
            </ul>
            <div className='grid grid-cols-2 mt-5'>
              <div className='mr-auto  '>
                <ul className='grid grid-cols-4'>
                  <li>
                    <img style={{ borderRadius: 50 }} src='https://switchiify.net.rw/u/assets/img/profile.png' className='h-[50px] w-[70px] rounded-fill' />
                  </li>

                  <li className='ml-[-10px]'><img style={{ borderRadius: 50 }} src='https://switchiify.net.rw/u/classes/profile/IMG-20221222-WA0014.jpeg' className='h-[50px] w-[50px] rounded-fill' />
                  </li>
                  <li style={{ borderRadius: 50 }} className='ml-[-20px] h-[50px] w-[50px] text-center p-3 bg-gray-500 text-center text-white rounded-fill' >
                    <p className='text-xl'>5+</p>
                  </li>
                  <li style={{ borderRadius: 50, border: "5px dotted #5f5959" }} className=' ml-3 pr-11 bg-white  ml-1 text-center  rounded-fill'>
                    <svg height={40} width={40} viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#5f5959"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.288"></g><g id="SVGRepo_iconCarrier"> <g id="style=linear"> <g id="add"> <path id="vector" d="M11.998 5.84424L11.998 18.1604" stroke="#919191" stroke-width="1.2" stroke-linecap="round"></path> <path id="vector_2" d="M18.1561 12.002L5.83998 12.0019" stroke="#919191" stroke-width="1.2" stroke-linecap="round"></path> </g> </g> </g></svg>            </li>
                </ul>
              </div>

              <div className='ml-auto'>

                <ul className='flex justify-center  items-center my-3'>
                  <li className='flex mr-1'><svg height={25} viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd" clip-rule="evenodd"> <path d="M5.113-.026c-2.803 0-5.074 2.272-5.074 5.074v53.841c0 2.803 2.271 5.074 5.074 5.074h45.773c2.801 0 5.074-2.271 5.074-5.074v-38.605l-18.901-20.31h-31.946z" fill="#a2b0be"></path> <path d="M55.977 20.352v1h-12.799s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="#b4c2cf"></path> <path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799l-18.903-20.352z" opacity=".5" fill="#ffffff"></path> </g> <path d="M26.6 41.467c1.134-1.134 1.134-2.986 0-4.12s-2.986-1.134-4.12 0l-9.167 9.167c-1.134 1.134-1.134 2.986 0 4.12s2.986 1.134 4.12 0l5.625-5.602c.324-.324.324-.856 0-1.181s-.856-.324-1.181 0l-3.542 3.519c-.486.509-1.273.509-1.759 0-.509-.486-.509-1.273 0-1.759l3.519-3.542c1.319-1.296 3.426-1.296 4.722 0 1.296 1.319 1.296 3.426 0 4.722l-5.625 5.625c-2.106 2.106-5.532 2.106-7.662 0-2.106-2.129-2.106-5.555 0-7.662l9.166-9.167c2.13-2.129 5.556-2.129 7.662 0 2.129 2.106 2.129 5.532 0 7.662l-.903.902c-.046-.926-.37-1.829-.926-2.616l.071-.068z" fill="#ffffff"></path> </g></svg> <span className='text-lg mx-1'> 2</span></li>
                  <li className='flex mr-1'><svg height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 9.5H17" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 14.5H14" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <span className='text-lg mx-1'> 2</span></li>
                </ul>
              </div>
            </div>

          </div>

          <div className="flex items-center justify-center my-3 rounded-md">
            <button className="flex bg-white hover:bg-gray-200 items-center justify-center text-center py-1 w-full">
              <svg height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="#1C274C"></path> </g></svg></button>
          </div>
        </div>
        {/* second */}

      </div>

    </div>
  )
}

export default All