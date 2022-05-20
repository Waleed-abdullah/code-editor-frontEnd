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
        console.log('Done')
    }

    return (
        <>
            <div className='mr-4 px-2 w-56 rounded-xl glass mb-2'>
                <div className='text-lg font-bold pt-2 hover:underline' style={{color: 'rgb(108, 199, 246)'}}>
                    <Link to={`/editor/projects/${project.name}`}>{project.name}</Link>
                </div>
                <div className='pb-4 mt-1'>
                    {project.description === '' ? "No description provided" : project.description}
                </div>
                {showClone ?
                <button style={{backgroundColor: '#0079F2'}}
                className='mb-3 text-white text-center w-16 rounded-xl
                font-extrabold text-lg font-mono border-2 border-transparent
                hover:border-blue-400' onClick={handleClone}>
                    Clone
                </button> : null}
            </div>
        </>
    )
}

export default ProjectBlock