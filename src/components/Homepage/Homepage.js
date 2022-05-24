import React from 'react'
import SignUp from './SignUp'
import { auth, provider } from '../../firebase';
import { createUser } from '../../services/user/apiCalls';
import { createProjectsFolder, createSnippetsFolder, createUserFolder } from '../../services/fileExplorer/apiCalls';
import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router-dom';

const Homepage = ({user, setUser}) => {
  let history = useHistory()

  const handleSignIn = () => {
    auth
    .signInWithPopup(provider)
    .then(async (result) => {
      const loggedInUser = {
        name: result.user.multiFactor.user.displayName,
        email: result.user.multiFactor.user.email,
        photoURL: result.user.multiFactor.user.photoURL
      }
      const resUser = await createUser(loggedInUser)
      
      if (resUser.savedUser){
        resUser.savedUser.projects.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate))
        if(!resUser.userExisted) {
          createUserFolder(resUser.savedUser.id)
          createProjectsFolder(resUser.savedUser.id)
          createSnippetsFolder(resUser.savedUser.id)
        } 
        setUser(resUser.savedUser)
        history.push(`/dashboard/${resUser.savedUser.name}`)
      }
    })
    .catch((error) => console.log(error.message));
  }

  return (
    <>
    <Helmet>
      <style>{'body { background-color: rgb(21,21,21,1); }'}</style>
    </Helmet>
    <div>
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