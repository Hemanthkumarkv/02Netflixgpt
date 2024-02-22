import React, { useRef, useState } from 'react'
// import Header from './Header'
import {checkValidDate } from '../utils/validate'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom'
import {  updateProfile } from "firebase/auth"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice'
import {USER_AVATHAR} from "../utils/constants"

const Login = () => 
{
    const [isSingInForm, setIsSingInForm] = useState(true)
    const [errorMessage, setErrormessage] = useState(null)
    const naviget = useNavigate()
    const dispatch = useDispatch()
    
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const handleButtonClick=()=>{
      
      //  console.log(name.current.value);
       console.log(email.current.value);
       console.log(password.current.value);
       const message =   checkValidDate(email.current.value,  password.current.value)
       console.log(message);
       setErrormessage(message)

       if(message) return;

       if(!isSingInForm)
       {
        //sing up logic
        createUserWithEmailAndPassword(auth,   email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;

           updateProfile(user, {
              displayName: "name.current.value", photoURL: USER_AVATHAR
              // displayName: "name.current.value", photoURL: "https://example.com/jane-q-user/profile.jpg"

              // displayName: "name.current.value", photoURL: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg"
            }).then(() => {
              // Profile updated!

              const{uid, email, dispalaName ,photoURL} = auth.currentUser
              dispatch(addUser({uid:uid, email:email, dispalaName:dispalaName, photoURL:photoURL}))
             
              naviget("/browse")
            }).catch((error) => {
              // An error occurred
              setErrormessage(error.message)
              // naviget("/browse")
            });
            
            console.log(user);
            
            // naviget("/browse")

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrormessage(errorCode +" - "+ errorMessage);
           });

       }
       else
       {
          //Sing in
          signInWithEmailAndPassword(auth, email.current.value, password.current.value )
          .then((userCredential) => {
        
            const user = userCredential.user;

            console.log(user);
            naviget("/browse")

          
  })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setErrormessage(errorCode +"-"+ errorMessage);
  });

       }
    }

    const toggleSingInForm=()=>{
        setIsSingInForm(!isSingInForm)
    }

  return (
    <div>
        {/* <Header/> */}
        <div  className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg' />

        </div>
        <form  onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSingInForm ? "Sign In" : "Sing Up"}</h1>

            {!isSingInForm && (<input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />)}

            <input ref={email}   type='text' placeholder='Email Addrass' className='p-4 my-4 w-full bg-gray-700' />
           
            <input  ref={password}  type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
            <p className='text-red-500 font-bold text-lg py-2' >{errorMessage}</p>

            <button className='p-4 my-4 w-full bg-red-700 rounded-lg ' onClick={ handleButtonClick}>{isSingInForm ? "Sign In" : "Sing Up"}</button>

            <span className='my-4 cursor-pointer' onClick={toggleSingInForm}> {isSingInForm ? "New to Netflix? Sing Up Now" : "Already registered? Sing In Now..."}</span>
        </form>


     
    </div>
  )
}

export default Login
