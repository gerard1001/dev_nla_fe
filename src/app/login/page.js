'use client'
import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../ContextAPI/Controller'
// import { cookies } from 'next/headers'

const Page = () => {
  const [forms, setForms] = useState({
    username: '',
    password: '',
  })
  const [passErr, setPassErr] = useState(false)
  const [emailErr, setEmailErr] = useState(false)
  const [errors, setErrors] = useState([])

  const formchanges = (event) => {
    const { name, value } = event.target
    setForms((prevData) => ({ ...prevData, [name]: value }))
  }

  const empty = (form) => {
    return form.trim() === ''
  }

  const submit = (event) => {
    event.preventDefault()

    if (empty(forms.username)) {
      setEmailErr(true)
      setTimeout(() => {
        setEmailErr(false)
      }, 3000)
    } else if (empty(forms.password)) {
      setPassErr(true)
      setTimeout(() => {
        setPassErr(false)
      }, 3000)
    } else {
      // DO LOGIN ACTIVITIES HERE OKAY.
      axios
        .post('http://localhost:2807/api/v1/auth/login', {
          email: forms.username,
          password: forms.password,
        })
        .then((res) => {
          // console.log(res?.status);
          if (res.status == 200 || res.status == 201) {
            // console.log(res?.data);
            localStorage.setItem('user', JSON.stringify(res?.data?.user))
            // cookies().set('token', res?.data?.token);
            localStorage.setItem('token', res?.data?.token)
            location.href = '/'
          }
        })
        .catch((err) => {
          console.log(err)
          if (err?.response?.status == 400) {
            // console.log(err?.response?.data);
            localStorage.setItem('user', JSON.stringify(err?.response?.data))
          } else if (
            err?.response?.status == 401 ||
            err?.response?.status == 404 ||
            err?.response?.status == 403 ||
            err?.response?.status == 409
          ) {
            // console.log(err?.response?.data);
            setErrors(err?.response?.data)
          }
        })
    }
  }

  console.log(useContext(AuthContext))

  return (
    <div>
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10 loginpage">
        <div className="flex flex-wrap content-center justify-center w-full mb-3">
          <div className="w-1/2">
            <ul
              className="flex mb-0 list-none pt-3 pb-4 flex-col bg-danger"
              role="tablist"
            >
              {Array.isArray(errors)
                ? errors.map((err, i) => (
                    <li
                      key={i}
                      className="flex-auto px-4 py-2 text-red-600"
                      role="tablist"
                    >
                      {err?.label}: {err?.message}
                    </li>
                  ))
                : ''}
            </ul>
          </div>
        </div>

        <div className="flex  shadow-md">
          <div
            className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
            style={{ width: ' 24rem', height: '35rem' }}
          >
            <div className="w-72">
              <center>
                <img className="h-[100px] " src="/logo.png" />
              </center>
              <center>
                <h2 className="text-black text-xl font-bold opacity-70">
                  Login
                </h2>
              </center>
              <h1 className=" text-black-900 text-lg font-semibold">
                Don’t have an account?{' '}
                <Link href="/register">
                  <span className="spansign">Sign Up</span>
                </Link>{' '}
              </h1>

              <form className="mt-4  ">
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Email address or Phone number *
                  </label>
                  {emailErr && (
                    <p className="text-red-500">
                      * Email/phone can't be empty please
                    </p>
                  )}
                  <input
                    onChange={formchanges}
                    name="username"
                    value={forms.username}
                    type="email"
                    placeholder="Enter your email"
                    className="block w-full rounded-full border border-gray-300 focus:border-rgba(27, 165, 132, 1)-700 focus:outline-none focus:ring-1 focus:ring-rgba(27, 165, 132, 1)-700 py-2 px-2 text-gray-500"
                  />
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Password
                  </label>
                  {passErr && (
                    <p className="text-red-500">
                      * Password can't be empty please
                    </p>
                  )}
                  <input
                    onChange={formchanges}
                    name="password"
                    value={forms.password}
                    type="password"
                    placeholder="*****"
                    className="block w-full rounded-full border border-gray-300 focus:border-rgba(27, 165, 132, 1)-700 focus:outline-none focus:ring-1 focus:ring-rgba(27, 165, 132, 1)-700 py-2 px-2 text-gray-500"
                  />
                </div>

                <div className="mb-3 flex flex-wrap content-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="mr-1 checked:bg-rgba(27, 165, 132, 1)-700"
                  />{' '}
                  <label
                    for="remember"
                    className="mr-auto text-xs font-semibold"
                  >
                    Remember for 30 days
                  </label>
                  <a href="#" className="text-xs font-semibold spansign">
                    Forgot password?
                  </a>
                </div>

                <div className="mb-3">
                  <button
                    onClick={submit}
                    className="mb-1.5 block w-full text-center text-white bg-gradient-to-r from-teal-500 via-teal-700 to-orange-400 hover:bg-purple-900 px-2 py-1.5 rounded-full"
                  >
                    Sign in
                  </button>
                  <div className="flex items-center justify-center my-4">
                    <div className="border-t border-gray-500 w-1/2 mr-4"></div>
                    <span className="text-gray-500">OR</span>
                    <div className="border-t border-gray-500 w-1/2 ml-4"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-10 my-[10px]">
                    <button className="flex text-black opacity-70 flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-0 py-1.5 rounded-lg">
                      <img
                        className="w-5  mr-2"
                        src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                      />
                    </button>
                    <button className="flex text-black opacity-70 flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-0 py-1.5 rounded-lg">
                      <img
                        className="w-5  mr-2"
                        src="https://techdocs.akamai.com/identity-cloud/img/social-login/identity-providers/apple-icon-white-23.jpg"
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div
            className="flex flex-wrap content-center justify-center rounded-r-md"
            style={{ width: '24rem', height: '35rem' }}
          >
            <img
              className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
              src="/nlalogin.png"
            />
          </div>
        </div>

        <div className="mt-3 w-full"></div>
      </div>
    </div>
  )
}

export default Page
