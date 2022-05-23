import React from 'react'
import { Link } from 'react-router-dom'
import '../Dashboard/ProjectBlock.css'

const Result = ({user}) => {
    return (
        <>  
            <div className='flex  ml-3 rounded-md px-5 py-2 mt-4 w-1/2 glass'>
                <div><Link to={`/users/profile/${user.id}`}><img className='rounded-full w-8 h-8' alt='profilePic' src={user.photoURL}/></Link></div>
                <div className='ml-3 mt-2 text-md hover:underline'><Link to={`/users/profile/${user.id}`}>{user.name}</Link></div>
            </div>
        </>   
    )
}

export default Result