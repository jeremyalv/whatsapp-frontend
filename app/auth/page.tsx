"use client";

import {} from "dotenv/config";

import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type Props = {}

const AuthPage = (props: Props) => {
  const router = useRouter();
  
  const [phoneNumber, setPhoneNumber] = useState<string>("+6281280009000");
  const [password, setPassword] = useState<string>("password");
  const [formError, setFormError] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleLogin = async () => {
    if (phoneNumber === "" || password === "") {
      alert("Warning: Missing login info. Please fill the login fields correctly.");
    };
    
    await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/login`, {
      "phone_number": phoneNumber,
      "password": password,
    })
    .then((res) => {
      // Use res.data.data to get returned User object
      // console.log(res.data.data);
      setFormError(false);
      
      // Set page cookie
      document.cookie = `token=${res.data.data.token}`;

      // Redirect to home URL
      router.replace(`/`);
    })
    .catch((error) => {
      // alert("An error occured. Please ensure the inputs are correct")
      setFormError(true);
      console.log("error:", error);
    });

    console.debug(phoneNumber, password);
  }
  
  return (
    <section className="flex flex-row justify-center h-screen w-screen">
      <div className="container w-full h-full px-6 py-24">
        <div
          className="g-4 flex h-full flex-wrap items-center justify-center">
          {/* <!-- Left column container with background--> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-4/12">
            <div className='relative w-[400px] h-[400px] '>
              <Image 
                src={"https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"}
                className='w-full'
                alt='Phone Image'
                fill
              />
            </div>
          </div>

          {/* <!-- Right column container with form --> */}
          <div className="relative md:w-8/12 lg:ml-6 lg:w-5/12">
            {formError && (
              <div className="text-red-500 font-semibold text-md -translate-y-[40px]">
                An error has occurred, please ensure inputs are correct
              </div>
            )}
            <form>
              <div className="relative mb-6" data-te-input-wrapper-init>
                {/* <!-- Phone Number input --> */}
                <PhoneInput 
                  country={"id"}
                  value={phoneNumber}
                  onChange={(phoneNumber) => {
                    setPhoneNumber(phoneNumber);
                    console.log(phoneNumber);
                  }}
                  enableSearch={true}
                  masks={{
                    id: "... .... ...."
                  }}
                  

                  containerStyle={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    lineHeight: "2.15",
                  }}
                  inputStyle={{ 
                    width: "100%",
                    height: "100%",
                    borderRadius: "0.25rem",
                    // padding: "5.12px 12px",
                    outline: "none",
                    minHeight: "50px",
                    backgroundColor: "transparent",
                  }}
                  searchStyle={{
                    margin: "4px 2px",
                    border: "none",
                    padding: "4px 4px"
                  }}
                  dropdownStyle={{
                    minHeight: "400px",
                    borderRadius: ".25rem",
                  }}
                  searchPlaceholder="Search your country"
                />
                <label
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-700 transition-all duration-200 ease-out translate-x-[0rem] -translate-y-[2rem] scale-[0.8] peer-focus:text-gray-600"
                  >
                    Phone Number
                </label>
              </div>

              <div className="h-[12px] w-full"></div>

              {/* <!-- Password input --> */}
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  className="peer block min-h-[50px] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-500 dark:placeholder:text-neutral-500 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput33"
                  placeholder="Password" />
                <label
                  htmlFor="exampleFormControlInput33"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-700 transition-all duration-200 ease-out -translate-y-[2rem] scale-[0.8]"
                  >Password
                </label>
              </div>

              {/* <!-- Remember me checkbox --> */}
              <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    checked={false || rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    id="exampleCheck3"
                    value="" 
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="exampleCheck3">
                    Remember me
                  </label>
                </div>

                {/* <!-- Forgot password link --> */}
                <a
                  href=""
                  className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  >Forgot password?</a
                >
              </div>

              {/* <!-- Submit button --> */}
              <button
                onClick={(event) => {
                  handleLogin();
                  event.preventDefault();
                }}
                type="submit"
                className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-gray-200 transition duration-150 ease-in-out bg-primary-600 shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Sign in
              </button>

              {/* <!-- Divider --> */}
              <div
                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p
                  className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>

              {/* <!-- Social login buttons --> */}
              <a
                className="mb-3 flex w-full border border-gray-500 items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-black hover:text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-white"
                href=""
                role="button"
                data-te-ripple-init
                data-te-ripple-color="light">
                {/* Google */}
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48" className='mr-4'>
                  <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg> */}
                Continue with Google
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
