import React from 'react'
import { auth, provider } from '../../firebase';

const SignUp = ({handleSignIn}) => {
  return (
    <button className='text-white 
    text-center w-24 rounded-lg 
    text-xl font-mono 
    bg-blue-500 
    hover:bg-blue-600 mr-5' onClick={handleSignIn}>
        Sign Up
    </button>
  )
}

export default SignUp