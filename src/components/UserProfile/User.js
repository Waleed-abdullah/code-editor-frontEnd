import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom'
import ProjectsList from '../Dashboard/ProjectsList'
import SnippetsList from '../Dashboard/SnippetsList'
import { getUser } from '../../services/user/apiCalls'

const User = ({user, setUser}) => {
  const [userProfile, setUserProfile] = useState(null)
  const [showClone, setShowClone] = useState(false)
  let { id } = useParams()

  useEffect(async () => {
    if (user.id !== id){
      let tmp = await getUser(id)
      setUserProfile(tmp)
      setShowClone(true)
    }
    else{
      setUserProfile(user)
    }
  }, [])

  if (userProfile){
    return (
      <>
          <Helmet>
              <style>{'body { background-color: rgb(21,21,21,1); }'}</style>
          </Helmet>

          <div className='flex justify-end mr-5 mt-5' style={{color: 'rgb(108, 199, 246)'}}>
            <Link className='hover:underline' to={`/dashboard/${userProfile.name}`}><i>Back to Dashboard</i></Link>
          </div>

          <div className='w-full flex mt-5 ml-8 text-white'>
            <img className='rounded-full w-20 h-20' alt='profilePic' src={userProfile.photoURL}/>
            <div className='mt-10 ml-5 text-4xl'>{userProfile.name}</div>
          </div>

          <div className='ml-3'>
            <ProjectsList user={userProfile} showClone={showClone} loggedInUser={user} setUser={setUser}/>
            <SnippetsList user={userProfile}/>
          </div>
      </>
    )
  }
  else {
    return (          
      <Helmet>
        <style>{'body { background-color: rgb(21,21,21,1); }'}</style>
      </Helmet>
    )
  }
}

export default User