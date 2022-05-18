import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import ProjectsList from '../Dashboard/ProjectsList'
import SnippetsList from '../Dashboard/SnippetsList'

const User = ({user}) => {
  return (
    <>
        <Helmet>
            <style>{'body { background-color: rgb(21,21,21,1); }'}</style>
        </Helmet>

        <div className='flex justify-end mr-5 mt-5' style={{color: 'rgb(108, 199, 246)'}}>
          <Link className='hover:underline' to={`/dashboard/${user.name}`}><i>Back to Dashboard</i></Link>
        </div>

        <div className='w-full flex mt-5 ml-8 text-white'>
          <img className='rounded-full w-20 h-20' alt='profilePic' src={user.photoURL}/>
          <div className='mt-10 ml-5 text-4xl'>{user.name}</div>
        </div>

        <div className='ml-3'>
          <ProjectsList user={user}/>
          <SnippetsList user={user}/>
        </div>
    </>
  )
}

export default User