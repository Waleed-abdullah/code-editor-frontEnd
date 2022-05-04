import React, { useState } from 'react'
import SignUp from './SignUp'
import { auth, provider } from '../../firebase';
import { createUser } from '../../services/user/apiCalls';

const Homepage = () => {
  const [user, setUser] = useState(null)

  const handleSignIn = () => {
    auth
    .signInWithPopup(provider)
    .then(async (result) => {
      // check if the user already exists in database
      const loggedInUser = {
        name: result.user.multiFactor.user.displayName,
        email: result.user.multiFactor.user.email
      }
      await createUser(loggedInUser)    
    })
    .catch((error) => console.log(error.message));
  }

  return (
    <>
    <div style = {{backgroundColor: 'rgb(21,21,21,1)', height: '100vh'}}>
        {/*Sign up and Log in container*/}
        <div className='w-full flex md:flex-row-reverse md:justify-start justify-center relative top-8'>
            <SignUp handleSignIn={handleSignIn}/>
        </div>

        {/*Text*/}
        <div style={{fontFamily: 'M PLUS 1, sans-serif'}} className='text-white 
        p-5 w-full relative top-28 text-center font-semibold text-6xl md:text-8xl'>
              Code, create, and learn together
        </div>

        {/*Sub Text*/}
        <div style={{fontFamily: 'M PLUS 1 Code. sans-serif', color: "#BABABA"}} className='relative 
        text-center top-32 p-5 w-full font-semibold text-2xl'>
          Use our free, collaborative, in-browser code editor
        </div>
    </div>
    </>
  )
}

export default Homepage