import React from 'react'
import { Link } from 'react-router-dom'

const Result = ({user}) => {
    return (
        <>  
            <div className='hover:underline text-lg mb-5' style={{color: 'rgb(108, 199, 246)'}}>
                <Link to={`/users/profile/${user.id}`}>{user.name}</Link>
            </div>
        </>   
    )
}

export default Result