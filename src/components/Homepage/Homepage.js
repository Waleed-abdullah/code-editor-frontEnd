import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'

const Homepage = () => {
  return (
    <>
    <div style = {{backgroundColor: 'rgb(21,21,21,1)', height: '100vh'}}>
        {/*Sign up and Log in container*/}
        <div className='w-full flex md:flex-row-reverse md:justify-start justify-center relative top-8'>
            <SignUp/>
            <LogIn/>
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