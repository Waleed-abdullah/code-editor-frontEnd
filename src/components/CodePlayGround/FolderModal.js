import React, {useState} from 'react'

import { createNewFolder } from '../../services/fileExplorer/apiCalls';

const FolderModal = ({setOpenFolderModal, folderSelectedRef, fetchData}) => {
    const [folderName, setFolderName] = useState('')
    const [folderPath, setFolderPath] = useState(folderSelectedRef.current)

    const handleNewFolderSubmit = async (event) => {
        event.preventDefault()
        await createNewFolder('abd', folderPath, folderName, 'TestDir')
        fetchData()
        setOpenFolderModal(false)
    }

  return (
    <>
        <h1 className='text-white text-2xl mt-4 font-bold'>Create New Folder</h1>

        <form onSubmit={handleNewFolderSubmit}>
            <div className='w-full mt-6'>
                <label className='text-lg text-white' htmlFor='folderName'>Folder Name: </label><br></br>
                <input 
                className='mt-2 w-full rounded-lg h-8 pl-2' 
                id='folderName' 
                type='text' 
                name='folderName'  
                onChange={(event) => setFolderName(event.target.value)}></input>
            </div>

            <div className='w-full mt-6'>
                <label className='text-lg text-white' htmlFor='folderPath'>Folder Path: </label><br></br>
                <input
                value={folderPath}
                className='mt-2 w-full rounded-lg h-8 pl-2 pt-2 pb-2' 
                id='folderPath' 
                type='text' 
                name='folderPath' 
                placeholder='Enter Path' 
                onChange={(event) => setFolderPath(event.target.value)}></input>
            </div>

            <div className='mt-5 flex justify-between'>
                <button 
                type='submit' 
                className='bg-blue-800 text-white text-lg font-semibold w-24 rounded-lg'>Create</button>
                <button 
                type='button' 
                className='bg-blue-800 text-white text-lg font-semibold w-24 rounded-lg' 
                onClick={() => setOpenFolderModal(false)}>Close</button>
            </div>
        </form>
    </>
  )
}

export default FolderModal