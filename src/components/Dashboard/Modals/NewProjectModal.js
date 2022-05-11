import React, { useState } from 'react'
import { createNewFile, createNewProject, createSnippetFile, updateFile } from '../../../services/fileExplorer/apiCalls'
import { updateUserProjectsList } from '../../../services/user/apiCalls'
import { useHistory } from 'react-router-dom';
import { code } from './hmtlBoilerplate';


const NewProjectModal = ({setOpenNewProjectModal, user, setUser}) => {
  let history = useHistory()
  const [projectInfo, setProjectInfo] = useState({name: '', description: '', type: 'projects'})
  
  const handleNewProjectSubmit = async (event) => {
    event.preventDefault()
    if (projectInfo.name.includes("\\") || projectInfo.name.includes("/") || projectInfo.name.includes(":") || projectInfo.name.includes("*")
        || projectInfo.name.includes("?")|| projectInfo.name.includes("\"")|| projectInfo.name.includes("<")|| projectInfo.name.includes(">")
        || projectInfo.name.includes("|")) {
            alert('Project name invalid!!\nCannot contain characters: / \\ : * ? " < > |')
    }
    else{
      const res = await updateUserProjectsList(user.id, projectInfo)
      res.updatedUser.projects.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate))
      res.updatedUser.snippets.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate))
      setUser(res.updatedUser)
      if (projectInfo.type === 'projects'){
        await createNewProject(user.id, res.dirName, projectInfo.type)
        await createNewFile(user.id, '/', 'index.html', res.dirName)
        //await updateFile(code, user.id, res.dirName, '/index.html')
        setOpenNewProjectModal(false)
        history.push(`/editor/${projectInfo.type}/${res.dirName}`)
      }
      else {
        await createNewProject(user.id, res.dirName, projectInfo.type)
        await createSnippetFile(user.id, 'main.cpp', res.dirName)
        setOpenNewProjectModal(false)
        history.push(`/editor/${projectInfo.type}/${res.dirName}`)
      }
    }
  }

  return (
    <>
      <h1 className='text-white text-2xl mt-4 font-bold'>Create New Project/Snippet</h1>

      <form onSubmit={handleNewProjectSubmit}>
        <div className='w-full mt-6'>
          <label className='text-lg text-white' htmlFor='projectName'>Name: </label>
          <input
          className='mt-2 w-full rounded-lg h-8 pl-2'
          id='projectName'
          type='text'
          name='projectName'
          required
          onChange={(event) => setProjectInfo({...projectInfo, name: event.target.value})}></input>
        </div>

        <div className='w-full mt-6'>
          <label className='text-lg text-white' htmlFor='projectDescription'>Description: </label>
          <textarea
          className='mt-2 w-full rounded-lg h-32 pl-2 pt-2 pb-2'
          id='projectDescription'
          name='projectDescription'
          onChange={(event) => setProjectInfo({...projectInfo, description: event.target.value})}></textarea>
        </div>

        <div className='w-full mt-6'>
          <label className='text-lg text-white' htmlFor='pORs'>Type: </label>
          <select className='w-full mt-2 rounded-lg py-1 font-semibold' name='pORs' id='pORs' defaultValue='project' onChange={(event) => setProjectInfo({...projectInfo, type: event.target.value})}>
            <option value='projects'>Project</option>
            <option value='snippets'>Snippet</option>
          </select>
        </div>

        <div className='mt-5 flex justify-between'>
          <button 
          type='submit' 
          className='bg-blue-800 text-white text-lg font-semibold w-24 rounded-lg'>Create</button>
          <button 
          type='button' 
          className='bg-blue-800 text-white text-lg font-semibold w-24 rounded-lg' 
          onClick={() => setOpenNewProjectModal(false)}>Close</button>
        </div>
      </form>
    </>
  )
}

export default NewProjectModal