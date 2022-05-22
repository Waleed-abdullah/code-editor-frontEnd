import React from 'react'
import { Link } from 'react-router-dom'
import { updateUserProjectsList, cloneProject } from '../../services/user/apiCalls'
import './ProjectBlock.css'

const ProjectBlock = ({project, showClone, loggedInUser, profileID, setUser}) => {
    const handleClone = async () => {
        const projectInfo = {
            name: project.name,
            description: project.description,
            type: 'projects',
            language: 'c',
        }
        const res = await updateUserProjectsList(loggedInUser.id, projectInfo)
        res.updatedUser.projects.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate))
        res.updatedUser.snippets.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate))
        setUser(res.updatedUser)
        await cloneProject(profileID, loggedInUser.id, project.name, res.dirName)
    }

    return (
        <>
            <div className='mr-4 px-2 w-56 rounded-xl glass mb-2'>
                <div className='text-md pt-2 hover:underline' style={{color: 'rgb(108, 199, 246)'}}>
                    {loggedInUser.id === profileID ? <Link to={`/editor/projects/${project.name}`}>{project.name}</Link> : project.name}
                </div>
                <div className='pb-4 mt-1'>
                    {project.description === '' ? "No description provided" : project.description}
                </div>
                {showClone ?
                <button
                className='text-white 
                text-center w-16 rounded-lg 
                text-lg font-mono 
                border-transparent 
                bg-blue-500
                hover:bg-blue-600 ml-1 mb-2' onClick={handleClone}>
                    Clone
                </button> : null}
            </div>
        </>
    )
}

export default ProjectBlock