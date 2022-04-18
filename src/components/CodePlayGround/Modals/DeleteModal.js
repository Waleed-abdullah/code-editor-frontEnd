import React from 'react'
import {ImWarning} from 'react-icons/im'

import { deleteFile, deleteFolder } from '../../../services/fileExplorer/apiCalls'

const DeleteModal = ({setOpenDeleteModal, selected, fetchData}) => {
    const handleDelete = async () => {
        if (selected.current.path !== ""){
            if (selected.current.flag === 'folder'){
                await deleteFolder('abd', selected.current.path, 'TestDir')
            }
            else{
                await deleteFile('abd', selected.current.path, 'TestDir')
            }
            await fetchData()
            setOpenDeleteModal(false)
        }
        else {
            alert('No file/folder selected to delete')
        }
    }   
  return (
    <>
        <div className='w-full'>
            <ImWarning className='ml-auto mr-auto mt-7' color='white' size='70px'/>
            <h1 className='text-white text-lg text-center mt-5'>{`Are you sure you want to delete ${selected.current.path}`}</h1>

            <div className='flex justify-center mt-8'>
                <button className='mr-5 text-white bg-red-600 w-24 rounded-lg text-xl font-semibold hover:bg-red-700 pt-1 pb-1' onClick={handleDelete}>Delete</button>
                <button className='ml-5 text-white bg-blue-800 w-24 rounded-lg text-xl font-semibold hover:bg-blue-900 pt-1 pb-1' onClick={() => setOpenDeleteModal(false)}>Cancel</button>
            </div>
        </div>
    </>
  )
}

export default DeleteModal