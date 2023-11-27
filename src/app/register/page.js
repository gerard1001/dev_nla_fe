"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { authRegister } from "@/redux/slices/auth.slice";

const schema = yup.object().shape({
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  phone: yup.string().required("Phone number is required"),
  nationalid: yup.number().required("National ID is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const page = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    dispatch(authRegister(data)).then(({ error, payload }) => {
      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Registered successfully");
        // setTimeout(() => {
        //   navigate("/login");
        // }, [3000]);
      }
      setLoading(false);
    });
    console.log(data, "*****8");
  };
  // const [forms, setForms] = useState({
  //   ID: "",
  //   password: "",
  //   cpassword: "",
  //   phone: "",
  //   email: "",
  //   firstname: "",
  //   stName: "",
  // });
  // const [passErr, setPassErr] = useState(false);
  // const [cpassErr, setCPassErr] = useState(false);
  // const [terms, setTerms] = useState(false);
  // const [sameGood, setSamegood] = useState(false);
  // const [equal, setNotequal] = useState(true);
  // const [emailErr, setEmailErr] = useState(false);
  // const [phoneErr, setPhoneErr] = useState(false);
  // const [IDErr, setIDErr] = useState(false);
  // const [errors, setErrors] = useState([]);

  // const formchanges = (event) => {
  //   const { name, value } = event.target;
  //   setForms((prevData) => ({ ...prevData, [name]: value }));
  // };

  // const submit = (event) => {
  //   event.preventDefault();
  //   let error = false;
  //   if (forms.ID.trim() == "") {
  //     setIDErr(true);
  //     error = true;
  //     setTimeout(() => {
  //       setIDErr(false);
  //     }, 3000);
  //   } else if (forms.phone.trim() == "") {
  //     setPhoneErr(true);
  //     error = true;
  //     setTimeout(() => {
  //       setPhoneErr(false);
  //     }, 3000);
  //   } else if (forms.email.trim() == "") {
  //     setEmailErr(true);
  //     error = true;
  //     setTimeout(() => {
  //       setEmailErr(false);
  //     }, 3000);
  //   } else if (forms.password.trim() == "") {
  //     setPassErr(true);
  //     error = true;
  //     setTimeout(() => {
  //       setPassErr(false);
  //     }, 3000);
  //   } else if (forms.cpassword.trim() == "") {
  //     setCPassErr(true);
  //     error = true;
  //     setTimeout(() => {
  //       setCPassErr(false);
  //     }, 3000);
  //   } else {
  //     error = false;
  //   }

  //   if (forms.password.trim() !== "" && forms.password.length > 6) {
  //     if (forms.password == forms.cpassword) {
  //       setNotequal(true);

  //       if (!terms) {
  //         error = true;
  //         alert("confirm terms and aggrements");
  //         // TOAST SIDE WHEN IT IS READY
  //       } else {
  //         error = false;
  //       }
  //     } else {
  //       error = true;
  //       setNotequal(false);
  //     }
  //   } else {
  //     if (forms.password) {
  //       error = true;
  //       setSamegood(true);
  //       setTimeout(() => {
  //         setSamegood(false);
  //       }, 3000);
  //     }
  //   }

  // if (!error) {
  //   // backend connection
  //   // alert("yes perform backend here")
  //   axios
  //     .post("http://localhost:2807/api/v1/auth/register", {
  //       nationalid: forms.ID,
  //       phone: forms.phone,
  //       email: forms.email,
  //       password: forms.password,
  //       confirmpassword: forms.cpassword,
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       if (res.data.status == 200 || res.data.status == 201) {
  //         console.log(res?.data);
  //       } else {
  //         console.log(res?.data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err?.response?.data);
  //       setErrors(err?.response?.data);
  //     });
  // }
  // };
  return (
    <div>
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10 loginpage">
        <div className="flex flex-wrap content-center justify-center w-full mb-3">
          <div className="w-1/2">
            <ul
              className="flex mb-0 list-none pt-3 pb-4 flex-col bg-danger"
              role="tablist"
            >
              {/* {errors.map((err, i) => (
                <li
                  key={i}
                  className="flex-auto px-4 py-2 text-red-600"
                  role="tablist"
                >
                  {err?.label}: {err?.message}
                </li>
              ))} */}
            </ul>
          </div>
        </div>

        <div className="flex shadow-md">
          <div
            className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
            style={{ width: " 24rem", height: "100%" }}
          >
            <div className="w-72">
              <center>
                <img className="h-[100px] " src="/logo.png" />
              </center>
              <center>
                <h2 className="text-black text-xl font-bold opacity-70">
                  Create your account.
                </h2>
              </center>
              <h1 className=" text-black-900 text-lg font-semibold">
                You have an account?{" "}
                <Link href="/login">
                  <span className="spansign">Sign In</span>
                </Link>{" "}
              </h1>

              <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    First Name
                  </label>
                  {/* {IDErr && (
                    <p className="text-red-500">* ID can't be empty please</p>
                  )} */}
                  <input
                    // onChange={formchanges}
                    // value={forms.ID}
                    // name="firstname"
                    {...register("firstname")}
                    type="text"
                    placeholder="Enter your firstname"
                    className="block w-full rounded-full border border-gray-300 focus:border-rgba(27, 165, 132, 1)-700 focus:outline-none focus:ring-1 focus:ring-rgba(27, 165, 132, 1)-700 py-2 px-2 text-gray-500"
                  />
                  {errors.firstname && (
                    <p className="text-sm text-red-500">
                      {errors.firstname.message}
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Last Name
                  </label>
                  {/* {IDErr && (
                    <p className="text-red-500">* ID can't be empty please</p>
                  )} */}
                  <input
                    // onChange={formchanges}
                    // value={forms.ID}
                    // name="lastname"
                    {...register("lastname")}
                    type="text"
                    placeholder="Enter your lastname"
                    className="block w-full rounded-full border border-gray-300 focus:border-rgba(27, 165, 132, 1)-700 focus:outline-none focus:ring-1 focus:ring-rgba(27, 165, 132, 1)-700 py-2 px-2 text-gray-500"
                  />
                  {errors.lastname && (
                    <p className="text-sm text-red-500">
                      {errors.lastname.message}
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    National ID
                  </label>
                  {/* {IDErr && (
                    <p className="text-red-500">* ID can't be empty please</p>
                  )} */}
                  <input
                    // onChange={formchanges}
                    // value={forms.ID}
                    // name="ID"
                    {...register("nationalid")}
                    type="number"
                    placeholder="Enter your national ID"
                    className="block w-full rounded-full border border-gray-300 focus:border-rgba(27, 165, 132, 1)-700 focus:outline-none focus:ring-1 focus:ring-rgba(27, 165, 132, 1)-700 py-2 px-2 text-gray-500"
                  />
                  {errors.nationalid && (
                    <p className="text-sm text-red-500">
                      {errors.nationalid.message}
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Phone number *
                  </label>
                  {/* {phoneErr && (
                    <p className="text-red-500">
                      * phone can't be empty please
                    </p>
                  )} */}
                  <div className="flex">
                    <div className="flex items-center flex-basis-10  border border-gray-300 rounded-l-full pr-[20px]">
                      <img width={27} className="pl-2" src="/rw.png" />
                      <span className="text-gray-500 text-sm">+250</span>
                    </div>
                    <input
                      // onChange={formchanges}
                      // value={forms.phone}
                      // name="phone"
                      {...register("phone")}
                      type="tel"
                      placeholder=" Enter your phone number"
                      className="flex-1  rounded-r-full border border-gray-300 focus:border-rgba(27, 165, 132, 1)-700 focus:outline-none focus:ring-1 focus:ring-rgba(27, 165, 132, 1)-700 py-2 px-[2px] text-gray-500"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Email address *
                  </label>
                  {/* {emailErr && (
                    <p className="text-red-500">
                      * Email can't be empty please
                    </p>
                  )} */}
                  <input
                    // onChange={formchanges}
                    // value={forms.email}
                    // name="email"
                    {...register("email")}
                    type="email"
                    placeholder="Enter your email"
                    className="block w-full rounded-full border border-gray-300 focus:border-rgba(27, 165, 132, 1)-700 focus:outline-none focus:ring-1 focus:ring-rgba(27, 165, 132, 1)-700 py-2 px-2 text-gray-500"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Password
                  </label>
                  {/* {passErr && (
                    <p className="text-red-500">
                      * Password can't be empty please
                    </p>
                  )}
                  {sameGood && (
                    <p className="text-red-500">
                      Password less than 6 characters
                    </p>
                  )} */}
                  <input
                    // onChange={formchanges}
                    // value={forms.password}
                    // name="password"
                    {...register("password")}
                    type="password"
                    placeholder="*****"
                    className="block w-full rounded-full border border-gray-300 focus:border-rgba(27, 165, 132, 1)-700 focus:outline-none focus:ring-1 focus:ring-rgba(27, 165, 132, 1)-700 py-2 px-2 text-gray-500"
                  />
                  {errors.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Confirm Password
                  </label>
                  {/* {cpassErr && (
                    <p className="text-red-500">
                      * Confirm password can't be empty please
                    </p>
                  )} */}
                  <input
                    // onChange={formchanges}
                    // value={forms.cpassword}
                    // name="cpassword"
                    {...register("confirmpassword")}
                    type="password"
                    placeholder="*****"
                    className="block w-full rounded-full border border-gray-300 focus:border-rgba(27, 165, 132, 1)-700 focus:outline-none focus:ring-1 focus:ring-rgba(27, 165, 132, 1)-700 py-2 px-2 text-gray-500"
                  />
                  {errors.confirmpassword && (
                    <p className="text-sm text-red-500">
                      {errors.confirmpassword.message}
                    </p>
                  )}
                  {/* {!equal && (
                    <p className="text-red-700 font-bold text-sm text-center">
                      <i className="bi bi-x-circle"></i> Password don't match
                    </p>
                  )} */}
                </div>

                <div className="mb-3 flex flex-wrap content-center">
                  <input
                    // onClick={() => setTerms(!terms)}
                    id="remember"
                    type="checkbox"
                    // defaultChecked={terms}
                    className="mr-1 checked:bg-rgba(27, 165, 132, 1)-700"
                  />
                  <label
                    htmlFor="remember"
                    className="mr-auto text-xs font-semibold"
                  >
                    I agree to the terms and condition
                  </label>
                </div>

                <div className="mb-3">
                  <button
                    // onClick={submit}
                    className="mb-1.5 block w-full text-center text-white bg-gradient-to-r from-teal-500 via-teal-700 to-orange-400 hover:bg-purple-900 px-2 py-1.5 rounded-full"
                    type="submit"
                  >
                    Sign Up
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
                        className="w-5  mr-2 object-cover"
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
            style={{ width: "24rem", height: "100%" }}
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
  );
};

export default page;
