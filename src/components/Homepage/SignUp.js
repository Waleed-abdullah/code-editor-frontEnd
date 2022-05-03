import React from 'react'
import { auth, provider } from '../../firebase';

const SignUp = () => {

  const handleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const temp = result.user.multiFactor.user;
        console.log(temp)
      })
      .catch((error) => console.log(error.message));
  }

  return (
    <button style={{backgroundColor: "#0079F2"}} className='text-white 
    text-center w-28 rounded-xl 
    font-extrabold text-2xl font-mono 
    border-2 border-transparent 
    hover:border-blue-400 mr-5' onClick={handleSignIn}>
        Sign Up
    </button>
  )
}

export default SignUp