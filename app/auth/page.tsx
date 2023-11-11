"use client";

import {} from "dotenv/config";

import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import WhatsappSVG from "@/public/images/whatsapp.svg"

const AuthPage = () => {
  const router = useRouter();
  
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [formError, setFormError] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleLogin = async () => {
    if (phoneNumber === "" || password === "") {
      alert("Missing login info. Please fill the login fields correctly.");
    };
    
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/login`, {
        "phone_number": "+" + phoneNumber,
        "password": password,
      })
  
      // Use res.data.data to get returned User object
      setFormError(false);
      
      // Set page cookie
      document.cookie = `token=${res.data.data.token}`;

      // Redirect to home URL
      router.replace(`/`);
    } catch (err) {
      alert("An error occured. Please ensure the inputs are correct")
      setFormError(true);
      console.log("error:", err);
    }

    console.debug("debug", phoneNumber, password);
  }
  
  return (
    <section className="flex flex-row justify-center h-screen w-screen">
      <div className="container w-full h-full px-6 py-24">
        <div
          className="g-4 flex h-full flex-wrap items-center justify-center">
          {/* <!-- Left column container with background--> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-4/12">
            <div className='mx-auto relative w-[300px] h-[300px] p-4'>
              <Image 
                src={WhatsappSVG}
                className='w-full'
                alt='Phone Image'
                fill
              />
            </div>
          </div>

          {/* <!-- Right column container with form --> */}
          <div className="relative md:w-8/12 lg:ml-6 lg:w-5/12">
            <div className="text-3xl text-black font-semibold -translate-y-[45px]">
              Login to Whatsapp
            </div>
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
                    // console.log(phoneNumber);
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
