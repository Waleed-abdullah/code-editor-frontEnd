import React, { useState } from 'react'
import { createNewFile } from '../../../services/fileExplorer/apiCalls'

const FileModal = ({setOpenFileModal, folderSelectedRef, fetchData}) => {
    const [fileName, setFileName] = useState('')
    const [filePath, setFilePath] = useState(folderSelectedRef.current)
    
    const handleNewFileSubmit = async (event) => {
        event.preventDefault()
        if (fileName.includes("\\") || fileName.includes("/") || fileName.includes(":") || fileName.includes("*")
        || fileName.includes("?")|| fileName.includes("\"")|| fileName.includes("<")|| fileName.includes(">")
        || fileName.includes("|")) {
            alert('File name invalid!!\nCannot contain characters: / \\ : * ? " < > |')
        }
        else {
            await createNewFile('abd', filePath, fileName, 'TestDir')
            fetchData()
            setOpenFileModal(false)
        }
    }

  return (
    <>
        <h1 className='text-white text-2xl mt-4 font-bold'>Create New File</h1>

        <form onSubmit={handleNewFileSubmit}>
            <div className='w-full mt-6'>
                <label className='text-lg text-white' htmlFor='fileName'>File Name: </label><br></br>
                <input 
                className='mt-2 w-full rounded-lg h-8 pl-2' 
                id='fileName' 
                type='text' 
                name='fileName'  
                onChange={(event) => setFileName(event.target.value)}></input>
            </div>

            <div className='w-full mt-6'>
                <label className='text-lg text-white' htmlFor='filePath'>File Path: </label><br></br>
                <input
                value={filePath}
                className='mt-2 w-full rounded-lg h-8 pl-2 pt-2 pb-2' 
                id='filePath' 
                type='text' 
                name='filePath' 
                placeholder='Enter Path' 
                onChange={(event) => setFilePath(event.target.value)}></input>
            </div>

            <div className='mt-5 flex justify-between'>
                <button 
                type='submit' 
                className='bg-blue-800 text-white text-lg font-semibold w-24 rounded-lg'>Create</button>
                <button 
                type='button' 
                className='bg-blue-800 text-white text-lg font-semibold w-24 rounded-lg' 
                onClick={() => setOpenFileModal(false)}>Close</button>
            </div>
        </form>
    </>
  )
}

export default FileModal