import React, { useState } from 'react'
import { uploadFile } from '../../services/fileExplorer/apiCalls'

const UploadModal = ({setOpenUploadModal, folderSelectedRef, fetchData}) => {
    const [file, setFile] = useState(null)
    const [filePath, setFilePath] = useState(folderSelectedRef.current)

    const handleFileChange = (event) => {
        if (event.target.files[0]){
            setFile(event.target.files[0])
        }
    }

    const handleUploadFileSubmit = async (event) => {
        event.preventDefault()
        await uploadFile('abd', 'TestDir', filePath, file)
        fetchData()
        setOpenUploadModal(false)
        setFile(null)
    }

    return (
    <>
    <h1 className='text-white text-2xl mt-4 font-bold'>Upload File</h1>

    <form onSubmit={handleUploadFileSubmit}>
        <div className='w-full mt-6'>
            <label className='text-lg text-white' htmlFor='file'>File: </label><br></br>
            <input 
            className='mt-2 w-full rounded-lg h-8 pl-2' 
            id='fileName' 
            type='file' 
            name='file'  
            onChange={handleFileChange}></input>
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
            className='bg-blue-800 text-white text-lg font-semibold w-24 rounded-lg'>Upload</button>
            <button 
            type='button' 
            className='bg-blue-800 text-white text-lg font-semibold w-24 rounded-lg' 
            onClick={() => setOpenUploadModal(false)}>Close</button>
        </div>
    </form>
    </>
  )
}

export default UploadModal