"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { AuthContext } from '../ContextAPI/Controller'
import { useContext } from 'react'

const Header = () => {

    const [visible, setVisibble] = useState(false)
    const {button} = useContext(AuthContext)

    const hideOrShow = () => {
        setVisibble(!visible)
    }
    const router = usePathname();

    return (
        <div><nav className=" bg-white w-full border border-gray flex relative justify-between items-center mx-auto px-8 h-[50px]">

            <div className="inline-flex">
                <a className=" text-gray-500" href="/"
                >

                </a>
            </div>
            <button onClick={()=>button()} className='hideonmobile'><i style={{fontSize:30}} className='bi bi-list'></i></button>
             <Link href="/">                <img style={{marginTop:0}} height={90} width={90} src='/logo.png' className='hideonmobile'/>
</Link>

     
      
            <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
                <div className="inline-block">
                    <div className="inline-flex items-center max-w-full">
                        <button style={{ background: "#E8F6F3" }} className="flex items-center  flex-grow-0 flex-shrink pl-2 relative w-80  sm-block border rounded-full px-1  py-1" type="button">
                            <div className="block flex-grow flex-shrink text-black overflow-hidden">Search filter</div>
                            <div className="flex items-center justify-center relative  h-8 w-8 rounded-full">
                                <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    fill='black'
                                    style={{
                                        display: "block",
                                        fill: "black",
                                        height: "12px",
                                        width: "12px",
                                        stroke: "currentcolor",
                                        strokeWidth: 5.33333,
                                        overflow: "visible",
                                        color: "black",
                                        opacity: 0.8
                                    }}
                                >
                                    <g fill="none">
                                        <path
                                            d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
                                        ></path>
                                    </g>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex-initial">
                <div className="flex justify-end items-center relative">

                    <div className="flex mr-4 items-center">
                        <Link className={router === "/notification" ? `flex py-2 text-white px-3 bg-blue-500 hover:bg-blue-800 rounded-full` : `flex py-2 text-gray-800 px-3 hover:bg-gray-200 rounded-full`} href="notification">
                            <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.31317 12.463C6.20006 9.29213 8.60976 6.6252 11.701 6.5C14.7923 6.6252 17.202 9.29213 17.0889 12.463C17.0889 13.78 18.4841 15.063 18.525 16.383C18.525 16.4017 18.525 16.4203 18.525 16.439C18.5552 17.2847 17.9124 17.9959 17.0879 18.029H13.9757C13.9786 18.677 13.7404 19.3018 13.3098 19.776C12.8957 20.2372 12.3123 20.4996 11.701 20.4996C11.0897 20.4996 10.5064 20.2372 10.0923 19.776C9.66161 19.3018 9.42346 18.677 9.42635 18.029H6.31317C5.48869 17.9959 4.84583 17.2847 4.87602 16.439C4.87602 16.4203 4.87602 16.4017 4.87602 16.383C4.91795 15.067 6.31317 13.781 6.31317 12.463Z" stroke={router ==="/notification" ? "white" : "#000000"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.42633 17.279C9.01212 17.279 8.67633 17.6148 8.67633 18.029C8.67633 18.4432 9.01212 18.779 9.42633 18.779V17.279ZM13.9757 18.779C14.3899 18.779 14.7257 18.4432 14.7257 18.029C14.7257 17.6148 14.3899 17.279 13.9757 17.279V18.779ZM12.676 5.25C13.0902 5.25 13.426 4.91421 13.426 4.5C13.426 4.08579 13.0902 3.75 12.676 3.75V5.25ZM10.726 3.75C10.3118 3.75 9.97601 4.08579 9.97601 4.5C9.97601 4.91421 10.3118 5.25 10.726 5.25V3.75ZM9.42633 18.779H13.9757V17.279H9.42633V18.779ZM12.676 3.75H10.726V5.25H12.676V3.75Z" fill={router ==="/notification" ? `white` : `#000000`}></path> </g></svg>
                            <div className="flex items-center relative cursor-pointer whitespace-nowrap">Notification</div>
                        </Link>
                        <div className="block relative">
                            <button type="button" className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative ">
                                <div className="flex items-center h-5">
                                    <div className="_xpkakx">
                                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "16px", width: "16px", fill: "black" }}><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path></svg>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="block">
                        <div className="inline relative">
                            <button onClick={hideOrShow} type="button" className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg">
                                <div className="pl-1">

                                    <svg
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        role="presentation"
                                        focusable="false"
                                        style={{ display: "block", fill: "gray", height: "16px", width: "16px", stroke: "gray", strokeWidth: 3, overflow: "visible" }}
                                    >
                                        <g fill="none" fill-rule="nonzero">
                                            <path d="m2 16h28"></path>
                                            <path d="m2 24h28"></path>
                                            <path d="m2 8h28"></path>
                                        </g>
                                    </svg>
                                </div>

                                <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                                    <img
                                        src="https://switchiify.net.rw/u/classes/profile/1689844895_1img_20230720_082441_454.jpg"
                                        alt="avatar Evan You"
                                        className="w-7 h-7 shrink-0 rounded-full mt-1.5"
                                    />
                                </div>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
            {visible && <div style={{ zIndex: 9999 }} className=" absolute top-50 right-0  bg-gray-100">
                <div
                    className="w-full max-w-sm rounded-lg bg-white p-3 drop-shadow-xl divide-y divide-gray-200"
                >
                    <div aria-label="header" className="flex space-x-4 items-center p-4">
                        <Link href="/profile">
                            <div aria-label="avatar" className="flex mr-auto items-center space-x-4">
                                <img
                                    src="https://switchiify.net.rw/u/classes/profile/1689844895_1img_20230720_082441_454.jpg"
                                    alt="avatar Evan You"
                                    className="w-16 h-16 shrink-0 rounded-full"
                                />
                                <div className="space-y-2 flex flex-col flex-1 truncate">
                                    <div className="font-medium relative text-xl leading-tight text-gray-900">
                                        <span className="flex">
                                            <span className="truncate relative pr-8">
                                                Mu Baptiste
                                                <span
                                                    aria-label="verified"
                                                    className="absolute top-1/2 -translate-y-1/2 right-0 inline-block rounded-full"
                                                >

                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    <p className="font-normal text-base leading-tight text-gray-500 truncate">
                                        mubaptiste2005@gmail.com
                                    </p>
                                </div>
                            </div>
                        </Link>

                    </div>
                    <div aria-label="navigation" className="py-2">
                        <nav className="grid gap-1">
                            <a
                                href="/"
                                className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-hovermubaptiste-900 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    className="w-7 h-7"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                </svg>
                                <span>Account Settings</span>
                            </a>
                            <a
                                href="/"
                                className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    className="w-7 h-7"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M9.785 6l8.215 8.215l-2.054 2.054a5.81 5.81 0 1 1 -8.215 -8.215l2.054 -2.054z"
                                    ></path>
                                    <path d="M4 20l3.5 -3.5"></path>
                                    <path d="M15 4l-3.5 3.5"></path>
                                    <path d="M20 9l-3.5 3.5"></path>
                                </svg>
                                <span>Integrations</span>
                            </a>
                            <a
                                href="/"
                                className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    className="w-7 h-7"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
                                    ></path>
                                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                </svg>
                                <span>Settings</span>
                            </a>
                            <a
                                href="/"
                                className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    className="w-7 h-7"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                    <path
                                        d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
                                    ></path>
                                    <path d="M9 17h6"></path>
                                    <path d="M9 13h6"></path>
                                </svg>
                                <span>Guide</span>
                            </a>
                            <a
                                href="/"
                                className="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    className="w-7 h-7"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"
                                    ></path>
                                    <path d="M12 16v.01"></path>
                                    <path
                                        d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"
                                    ></path>
                                </svg>
                                <span>Helper Center</span>
                            </a>
                        </nav>
                    </div>
                    <div aria-label="account-upgrade" className="px-4 py-6">
                        <div className="flex items-center space-x-3">
                            <div className="mr-auto space-y-2">
                                <p className="font-medium text-xl text-gray-900 leading-none">
                                    From: Dtec Software solution.
                                </p>

                            </div>

                        </div>
                    </div>
                    <div aria-label="footer" className="pt-2">
                        <button
                            type="button"
                            className="flex items-center space-x-3 py-3 px-4 w-full leading-6 text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
                            onClick={() => {
                                localStorage.removeItem('token')
                                localStorage.removeItem('user')
                                window.location.href = '/login'
                            }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="w-7 h-7"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
                                ></path>
                                <path d="M9 12h12l-3 -3"></path>
                                <path d="M18 15l3 -3"></path>
                            </svg>
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Header