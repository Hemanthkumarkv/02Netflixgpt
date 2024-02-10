import React, { useState } from 'react'
import Header from './Header'

const Login = () => 
{
    const [isSingInForm, setIsSingInForm] = useState(true)

    const toggleSingInForm=()=>{
        setIsSingInForm(!isSingInForm)
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg' />

        </div>
        <form  className='w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSingInForm ? "Sign In" : "Sing Up"}</h1>
            {!isSingInForm && (<input  type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />)}

            <input  type='text' placeholder='Email Addrass' className='p-4 my-4 w-full bg-gray-700' />
            <input  type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
            <button className='p-4 my-4 w-full bg-red-700 rounded-lg ' onClick={toggleSingInForm}>{isSingInForm ? "Sign In" : "Sing Up"}</button>

            <span className='my-4' onClick={toggleSingInForm}> {isSingInForm ? "New to Netflix? Sing Up Now" : "Already registered? Sing In Now..."}</span>
        </form>


     
    </div>
  )
}

export default Login
