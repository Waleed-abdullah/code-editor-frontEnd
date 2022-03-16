import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'

const Homepage = () => {
  return (
    <>
    <div style = {{backgroundColor: "#0E1525", height: '100vh'}}>
        <div className='w-full flex md:flex-row-reverse md:justify-start justify-center relative top-8'>
            <SignUp/>
            <LogIn/>
        </div>
    </div>
    </>
  )
}

export default Homepage