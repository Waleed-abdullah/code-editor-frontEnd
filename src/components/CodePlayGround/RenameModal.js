import React, { useState } from 'react'
import { renameFile } from '../../services/fileExplorer/apiCalls'

const RenameModal = ({setOpenRenameModal, selected, fetchData}) => {
    const [newFileName, setNewFileName] = useState('')
    const oldFileName = selected.current.path.split("/")[selected.current.path.split("/").length-1] 

    const handleNewNameSubmit = async (event) => {
        event.preventDefault()
        await renameFile('abd', oldFileName, newFileName, selected.current.path, 'TestDir')
        fetchData()
        setOpenRenameModal(false)
    }

  return (
    <>
        <h1 className='text-white text-2xl mt-4 font-bold'>Rename File</h1>

        <form onSubmit={handleNewNameSubmit}>
            <div className='w-full mt-6'>
                <label className='text-lg text-white' htmlFor='fileName'>Old File Name: </label><br></br>
                <input
                value={oldFileName}
                className='mt-2 w-full rounded-lg h-8 pl-2' 
                id='oldFileName' 
                type='text' 
                name='oldFileName' 
                disabled></input>
            </div>

            <div className='w-full mt-6'>
                <label className='text-lg text-white' htmlFor='filePath'>New File Name: </label><br></br>
                <input
                value={newFileName}
                className='mt-2 w-full rounded-lg h-8 pl-2 pt-2 pb-2' 
                id='newFileName' 
                type='text' 
                name='newFileName' 
                placeholder='Enter New File Name' 
                onChange={(event) => setNewFileName(event.target.value)}></input>
            </div>

            <div className='mt-5 flex justify-between'>
                <button 
                type='submit' 
                className='bg-blue-800 text-white text-lg font-semibold w-24 rounded-lg'>Rename</button>
                <button 
                type='button' 
                className='bg-blue-800 text-white text-lg font-semibold w-24 rounded-lg' 
                onClick={() => setOpenRenameModal(false)}>Close</button>
            </div>
        </form>
    </>
  )
}

export default RenameModal