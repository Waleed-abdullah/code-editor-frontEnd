import React, {useEffect, useRef, useState} from 'react';
import ReactTooltip from 'react-tooltip';
import Modal from 'react-modal'
import {AiFillFolderAdd, AiFillFileAdd} from 'react-icons/ai'
import { ImBin2 } from 'react-icons/im'
import { BiRename } from 'react-icons/bi'
import { BsUpload } from 'react-icons/bs'
import FileBlock from './FileBlock';
import FolderBlock from './FolderBlock';

import { getProjectDir} from '../../services/fileExplorer/apiCalls';

import FolderModal from './Modals/FolderModal';
import FileModal from './Modals/FileModal';
import { customStyles } from './folderModalStyles'
import DeleteModal from './Modals/DeleteModal';

import './FileExplorer.css'
import RenameModal from './Modals/RenameModal';
import UploadModal from './Modals/UploadModal';

Modal.setAppElement('#root')

const FileExplorer = ({setOpenFile, user, currentProject}) => {
    const [folders, setFolders] = useState()
    const [rootFiles, setRootFiles] = useState()
    const [keys, setKeys] = useState()

    const [openFolderModal, setOpenFolderModal] = useState(false)
    const [openFileModal, setOpenFileModal] = useState(false)
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [openRenameModal, setOpenRenameModal] = useState(false)
    const [openUploadModal, setOpenUploadModal] = useState(false)
    
    const folderSelectedRef = useRef('/')
    const fileSelectedRef = useRef('')
    const selected = useRef({flag: 'file', path: ''})

    const counter = 1;

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await getProjectDir(user.id, currentProject)
        setFolders(res.seenFolder)
        setRootFiles(res.rootFiles)
        setKeys(Object.keys(res.seenFolder))
    }

  return (
    <>
        <div className='p-2' style={{backgroundColor: 'rgb(21,21,21,1)', resize: 'horizontal', overflow: 'auto', maxWidth: '100%', minWidth:'18%'}}>
            
            {/*Header*/}
            <div className='flex justify-between sticky' style={{borderBottomWidth: '2px', borderBottomColor: 'rgb(108, 199, 246)'}}>
                <div className='ml-2 font-semibold text-lg mt-2'>Files</div>
                <div className='flex flex-row-reverse mt-1'>
                    <div className='ml-2 py-2'>
                        <AiFillFileAdd size='18px' data-tip='New File' onClick={() => setOpenFileModal(true)}/>
                        <ReactTooltip/>
                    </div>
                    <div className='ml-2 py-2.5'>
                        <AiFillFolderAdd size='18px' data-tip='New Folder' onClick={() => setOpenFolderModal(true)}/>
                        <ReactTooltip/>
                    </div>
                    <div className='ml-2 py-2.5'>
                        <ImBin2 size='16px' data-tip='Delete' onClick={() => setOpenDeleteModal(true)}/>
                        <ReactTooltip/>
                    </div>
                    <div className='ml-2 py-2.5'>
                        <BiRename size='16px' data-tip='Rename' onClick={() => setOpenRenameModal(true)}/>
                        <ReactTooltip/>
                    </div>
                    <div className='ml-2 py-2.5'>
                        <BsUpload size='16px' data-tip='Upload' onClick={() => setOpenUploadModal(true)}/>
                        <ReactTooltip/>
                    </div>
                </div>
            </div>

            {/*Render existing folder and files*/}
            <div className='overflow-auto h-full pt-2 pb-2' style={{height:'89%'}}>
                {keys ?
                    keys.map((key) => (
                        <FolderBlock key={'/'+key} name={key} folders={folders[key]} counter={counter} path={'/'+key} folderSelectedRef={folderSelectedRef} fileSelectedRef={fileSelectedRef} selected={selected} setOpenFile={setOpenFile} user={user} currentProject={currentProject}/>
                    )) : null
                }

                {rootFiles ?
                    rootFiles.map((file) => (
                        <FileBlock key={'/'+file} name={file} counter={counter} path={'/'+file} fileSelectedRef={fileSelectedRef} selected={selected} setOpenFile={setOpenFile} user={user} currentProject={currentProject}/>
                    )) : null
                }
            </div>
        </div>

        <Modal
        isOpen={openFolderModal}
        style={customStyles}
        contentLabel="Creat New Folder">
            <FolderModal setOpenFolderModal={setOpenFolderModal} folderSelectedRef={folderSelectedRef} fetchData={fetchData} user={user} currentProject={currentProject}/>
        </Modal>

        <Modal
        isOpen={openFileModal}
        style={customStyles}
        contentLabel="Creat New File">
            <FileModal setOpenFileModal={setOpenFileModal} folderSelectedRef={folderSelectedRef} fetchData={fetchData} user={user} currentProject={currentProject}/>
        </Modal>

        <Modal
        isOpen={openDeleteModal}
        style={customStyles}
        contentLabel='Delete File/Folder'>
            <DeleteModal setOpenDeleteModal={setOpenDeleteModal} selected={selected} fetchData={fetchData} user={user} currentProject={currentProject}/>
        </Modal>

        <Modal
        isOpen={openRenameModal}
        style={customStyles}
        contentLabel='Rename File/Folder'>
            <RenameModal setOpenRenameModal={setOpenRenameModal} selected={selected} fetchData={fetchData} user={user} currentProject={currentProject}/>
        </Modal>

        <Modal
        isOpen={openUploadModal}
        style={customStyles}
        contentLabel='Upload'>
            <UploadModal setOpenUploadModal={setOpenUploadModal} folderSelectedRef={folderSelectedRef} fetchData={fetchData} user={user} currentProject={currentProject}/>
        </Modal>
    </>
  )
}

export default FileExplorer