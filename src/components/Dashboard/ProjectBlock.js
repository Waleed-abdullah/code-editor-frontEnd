import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectBlock.css'

const ProjectBlock = ({project}) => {
    return (
        <>
            <div className='mr-4 px-2 w-56 rounded-xl glass mb-2'>
                <div className='text-lg font-bold pt-2 hover:underline' style={{color: 'rgb(108, 199, 246)'}}>
                    <Link to={`/editor/projects/${project.name}`}>{project.name}</Link>
                </div>
                <div className='pb-4 mt-1'>
                    {project.description === '' ? "No description provided" : project.description}
                </div>
            </div>
        </>
    )
}

export default ProjectBlock