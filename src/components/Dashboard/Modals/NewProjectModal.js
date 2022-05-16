import React, { useState } from 'react'
import { createNewFile, createNewProject, createSnippetFile, updateFile } from '../../../services/fileExplorer/apiCalls'
import { updateUserProjectsList } from '../../../services/user/apiCalls'
import { useHistory } from 'react-router-dom';
import { code } from './hmtlBoilerplate';


const NewProjectModal = ({setOpenNewProjectModal, user, setUser}) => {
  let history = useHistory()
  const [projectInfo, setProjectInfo] = useState({name: '', description: '', type: 'projects', language: 'c'})
  
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
        await createSnippetFile(user.id, ('Snippet.'+projectInfo.language), res.dirName)
        setOpenNewProjectModal(false)
        history.push(`/editor/${projectInfo.type}/${res.dirName}/${projectInfo.language}`)
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
          <select className='w-full mt-2 rounded-lg py-1 font-semibold' name='pORs' id='pORs' defaultValue='projects' onChange={(event) => setProjectInfo({...projectInfo, type: event.target.value})}>
            <option value='projects'>Project</option>
            <option value='snippets'>Snippet</option>
          </select>
        </div>

        <div className='w-full mt-6'>
          <label className='text-lg text-white' htmlFor='languages'>Snippet Language: </label>
          <select disabled={projectInfo.type === 'snippets' ? false : true} className='w-full mt-2 rounded-lg py-1 font-semibold' name='languages' id='languages' defaultValue='c' onChange={(event) => setProjectInfo({...projectInfo, language: event.target.value})}>
            <option value='c'>C</option>
            <option value='cljs'>Clojure</option>
            <option value='cpp'>C++</option>
            <option value='cr'>Crystal</option>
            <option value='cs'>C#</option>
            <option value='d'>D</option>
            <option value='ex'>Elixir</option>
            <option value='go'>Go</option>
            <option value='hs'>Haskell</option>
            <option value='java'>Java</option>
            <option value='jl'>Julia</option>
            <option value='kt'>Kotlin</option>
            <option value='lua'>Lua</option>
            <option value='pl'>Perl</option>
            <option value='php'>PHP</option>
            <option value='py'>Python</option>
            <option value='rb'>Ruby</option>
            <option value='rs'>Rust</option>
            <option value='ts'>Typescript</option>
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