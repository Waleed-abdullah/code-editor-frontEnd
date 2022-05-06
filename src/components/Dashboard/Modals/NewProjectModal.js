import React, { useState } from 'react'
import { createNewFile, createNewProject, updateFile } from '../../../services/fileExplorer/apiCalls'
import { updateUserProjectsList } from '../../../services/user/apiCalls'
import { useHistory } from 'react-router-dom';

const code = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`

const NewProjectModal = ({setOpenNewProjectModal, user, setUser, setCurrentProject}) => {
  let history = useHistory()
  const [projectInfo, setProjectInfo] = useState({name: '', description: ''})
  
  const handleNewProjectSubmit = async (event) => {
    event.preventDefault()
    if (projectInfo.name.includes("\\") || projectInfo.name.includes("/") || projectInfo.name.includes(":") || projectInfo.name.includes("*")
        || projectInfo.name.includes("?")|| projectInfo.name.includes("\"")|| projectInfo.name.includes("<")|| projectInfo.name.includes(">")
        || projectInfo.name.includes("|")) {
            alert('Project name invalid!!\nCannot contain characters: / \\ : * ? " < > |')
    }
    else{
      const res = await updateUserProjectsList(user.id, projectInfo)
      setUser(res.updatedUser)
      await createNewProject(user.id, res.dirName)
      await createNewFile(user.id, '/', 'index.html', res.dirName)
      await updateFile(code, user.id, res.dirName, '/index.html')
      setOpenNewProjectModal(false)
      setCurrentProject(res.dirName)
      history.push(`/editor/${res.dirName}`)
    }
  }

  return (
    <>
      <h1 className='text-white text-2xl mt-4 font-bold'>Create New Project</h1>

      <form onSubmit={handleNewProjectSubmit}>
        <div className='w-full mt-6'>
          <label className='text-lg text-white' htmlFor='projectName'>Project Name: </label>
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