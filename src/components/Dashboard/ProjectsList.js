import React from 'react'
import ProjectBlock from './ProjectBlock'

const ProjectsList = ({user}) => {
    const projectsList = user.projects.filter((project, index) => index < 3)
    
    return (
        <>
            <div className='text-white mt-8 ml-6 mr-6'>
                <h1 className='text-2xl'>Recent Projects</h1>

                <div className='flex justify-start w-full mt-5'>
                    {projectsList.length === 0 ? 
                    <div className='text-lg'><i>No recent projects</i></div> : 
                    projectsList.map(project => (
                        <ProjectBlock key={project.id} project={project}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProjectsList