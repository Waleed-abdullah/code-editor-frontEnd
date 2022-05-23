import React, {useState} from 'react'

import { createNewFolder } from '../../../services/fileExplorer/apiCalls';

const FolderModal = ({setOpenFolderModal, folderSelectedRef, fetchData, user, currentProject}) => {
    const [folderName, setFolderName] = useState('')
    const [folderPath, setFolderPath] = useState(folderSelectedRef.current)

    const handleNewFolderSubmit = async (event) => {
        event.preventDefault()
        if (folderName.includes("\\") || folderName.includes("/") || folderName.includes(":") || folderName.includes("*")
        || folderName.includes("?")|| folderName.includes("\"")|| folderName.includes("<")|| folderName.includes(">")
        || folderName.includes("|")) {
            alert('Folder name invalid!!\nCannot contain characters: / \\ : * ? " < > |')
        }
        else{
            await createNewFolder(user.id, folderPath, folderName, currentProject)
            fetchData()
            setOpenFolderModal(false)
        }
    }

  return (
    <>
        <h1 className='text-white text-2xl mt-4'>Create New Folder</h1>

        <form onSubmit={handleNewFolderSubmit}>
            <div className='w-full mt-6'>
                <label className='text-md text-white' htmlFor='folderName'>Folder Name: </label><br></br>
                <input 
                className='mt-2 w-full rounded-lg h-8 pl-2' 
                id='folderName' 
                type='text' 
                name='folderName'
                required
                onChange={(event) => setFolderName(event.target.value)}></input>
            </div>

            <div className='w-full mt-6'>
                <label className='text-md text-white' htmlFor='folderPath'>Folder Path: </label><br></br>
                <input
                value={folderPath}
                className='mt-2 w-full rounded-lg h-8 pl-2 pt-2 pb-2' 
                id='folderPath' 
                type='text' 
                name='folderPath' 
                placeholder='Enter Path'
                required 
                onChange={(event) => setFolderPath(event.target.value)}></input>
            </div>

            <div className='mt-5 flex justify-between'>
                <button 
                type='submit' 
                className='bg-blue-700 hover:bg-blue-900 text-white text-lg w-24 rounded-lg'>Create</button>
                <button 
                type='button' 
                className='bg-blue-800 hover:bg-blue-900 text-white text-lg w-24 rounded-lg' 
                onClick={() => setOpenFolderModal(false)}>Close</button>
            </div>
        </form>
    </>
  )
}

export default FolderModal