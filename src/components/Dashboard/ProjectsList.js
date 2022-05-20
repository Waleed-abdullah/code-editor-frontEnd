import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ProjectBlock from './ProjectBlock'

const ProjectsList = ({user, showClone, loggedInUser, setUser}) => {
    const location = useLocation()
    let projectsList
    let ignore = false
    if (location.pathname.includes('/users/profile')){
        ignore = true
        projectsList = user.projects
    }
    else {projectsList = user.projects.filter((project, index) => index < 3)}
    
    return (
        <>
            <div className='text-white mt-8 ml-6 mr-6'>
                <h1 className='text-2xl'>{ignore ? `Projects` : `Recent Projects`}</h1>

                <div className='flex justify-start w-full mt-5 flex-wrap'>
                    {projectsList.length === 0 ? 
                    <div className='text-lg'><i>No recent projects</i></div> : 
                    projectsList.map(project => (
                        <ProjectBlock key={project.id} project={project} showClone={showClone} loggedInUser={loggedInUser} profileID={user.id} setUser={setUser}/>
                    ))}
                </div>
                
                {user.projects.length > 3 && !ignore ?
                <div className='pl-2 text-md font-bold pt-2 hover:underline' style={{color: 'rgb(108, 199, 246)'}}>
                    <Link to={`/users/profile/${user.id}`}>See more</Link>
                </div>
                : null}
            </div>
        </>
    )
}

export default ProjectsList