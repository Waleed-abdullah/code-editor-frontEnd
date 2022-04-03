import React, {useEffect, useRef, useState} from 'react';
import ReactTooltip from 'react-tooltip';
import Modal from 'react-modal'
import {AiFillFolderAdd, AiFillFileAdd} from 'react-icons/ai'
import FileBlock from './FileBlock';
import FolderBlock from './FolderBlock';

import { getProjectDir} from '../../services/fileExplorer/apiCalls';

import FolderModal from './FolderModal';
import FileModal from './FileModal';
import { customStyles } from './folderModalStyles'

Modal.setAppElement('#root')

const FileExplorer = () => {
    const [folders, setFolders] = useState()
    const [rootFiles, setRootFiles] = useState()
    const [keys, setKeys] = useState()

    const [openFolderModal, setOpenFolderModal] = useState(false)
    const [openFileModal, setOpenFileModal] = useState(false)
    
    const folderSelectedRef = useRef('/')
    const fileSelectedRef = useRef('')

    const counter = 1;

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await getProjectDir('abd', 'TestDir')
        setFolders(res.seenFolder)
        setRootFiles(res.rootFiles)
        setKeys(Object.keys(res.seenFolder))
        console.log(res);
    }


    // const handleNewFile = () => {
    //     //console.log(fileSelectedRef.current)
    // }

  return (
    <>
        <div className='p-2 overflow-auto' style={{width: '20%', height: '92%', backgroundColor: '#1c2333'}}>
            
            {/*Header*/}
            <div className='flex justify-between'>
                <div className='ml-2 font-semibold text-2xl'>Files</div>
                <div className='flex flex-row-reverse'>
                    <div className='ml-2 py-2'>
                        <AiFillFileAdd size='20px' data-tip='New File' onClick={() => setOpenFileModal(true)}/>
                        <ReactTooltip/>
                    </div>
                    <div className='ml-2 py-2.5'>
                        <AiFillFolderAdd size='20px' data-tip='New Folder' onClick={() => setOpenFolderModal(true)}/>
                        <ReactTooltip/>
                    </div>
                </div>
            </div>

            {/*Render existing folder and files*/}
            {keys ?
                keys.map((key) => (
                    <FolderBlock key={'/'+key} name={key} folders={folders[key]} counter={counter} path={'/'+key} folderSelectedRef={folderSelectedRef} fileSelectedRef={fileSelectedRef}/>
                )) : console.log()
            }

            {rootFiles ?
                rootFiles.map((file) => (
                    <FileBlock key={'/'+file} name={file} counter={counter} path={'/'+file} fileSelectedRef={fileSelectedRef}/>
                )) : console.log()
            }
        </div>

        <Modal
        isOpen={openFolderModal}
        style={customStyles}
        contentLabel="Creat New Folder">
            <FolderModal setOpenFolderModal={setOpenFolderModal} folderSelectedRef={folderSelectedRef} fetchData={fetchData}/>
        </Modal>

        <Modal
        isOpen={openFileModal}
        style={customStyles}
        contentLabel="Creat New File">
            <FileModal setOpenFileModal={setOpenFileModal} folderSelectedRef={folderSelectedRef} fetchData={fetchData}/>
        </Modal>
    </>
  )
}

export default FileExplorer

// TODO: Add delete, rename, copy, drag-drop functionality
// TODO: Remove scroll-bar
// TODO: Add file icons