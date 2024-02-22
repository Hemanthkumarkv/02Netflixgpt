import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {  signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";
// import {auth} from "../utils/firebase"
import  { useEffect } from 'react'
import { addUser, removeUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'
import { Logo } from '../utils/constants';

const Header = () => {
  // const naviget= useNavigate()
  const user = useSelector(store => store.user)
  const dispatch=useDispatch()
    const navigete = useNavigate()
   


  const handleSingOUt=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigete ("/")
    }).catch((error) => {
      // An error happened.
      navigete ("/error")
    });
  }


  
  useEffect(()=>{
   const unSubCribe = onAuthStateChanged(auth, (user) => {
        if (user) {
        //   Sign up and sing in 

          const{uid,  email, dispalaName ,photoURL} = user
            dispatch(addUser({uid:uid, email:email, dispalaName:dispalaName, photoURL:photoURL}))
         
            navigete("/browse")
        } else {
          // User is signed out
            dispatch(removeUser())
            navigete("/")

        }
      });

      //UnsubCribe when componet unmount

      return()=>unSubCribe()

},[])



  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
       <img className='w-44'  
       src={Logo}
      //  src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
       
       alt='logo'/>
       {<div className='flex p-2'>
      
      <img className='w-12 h-12 bg-color-red ' src={user?.photoURL}/>
      {/* <img className='w-12 h-12 bg-color-red ' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='userIcon'/> */}
      <button className='font-bold text-white' onClick={handleSingOUt}>(Sing Out)</button>

    </div >}

 
    </div>

    
   
  )
}

export default Header
