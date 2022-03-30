import React, {useEffect, useRef, useState} from 'react';
import ReactTooltip from 'react-tooltip';
import {AiFillFolderAdd, AiFillFileAdd} from 'react-icons/ai'
import FileBlock from './FileBlock';
import FolderBlock from './FolderBlock';

import { getProjectDir, createNewFolder } from '../../services/fileExplorer/apiCalls';

const FileExplorer = () => {
    const [folders, setFolders] = useState()
    const [rootFiles, setRootFiles] = useState()
    const [keys, setKeys] = useState()
    
    const folderSelectedRef = useRef('/')
    const fileSelectedRef = useRef('')

    const counter = 1;

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await getProjectDir('abd', 'TestDir')
        console.log(res.seenFolder)
        setFolders(res.seenFolder)
        setRootFiles(res.rootFiles)
        setKeys(Object.keys(res.seenFolder))
    }

    const handleNewFolder = () => {
        console.log(folderSelectedRef.current)
        createNewFolder('abd', folderSelectedRef.current, 'hehe', 'TestDir')
    }

    const handleNewFile = () => {
        console.log(fileSelectedRef.current)
    }

  return (
    <>
        <div className='p-2 overflow-auto' style={{width: '20%', height: '92%', backgroundColor: '#1c2333'}}>
            
            {/*Header*/}
            <div className='flex justify-between'>
                <div className='ml-2 font-semibold text-2xl'>Files</div>
                <div className='flex flex-row-reverse'>
                    <div className='ml-2 py-2'>
                        <AiFillFileAdd size='20px' data-tip='New File' onClick={handleNewFile}/>
                        <ReactTooltip/>
                    </div>
                    <div className='ml-2 py-2.5'>
                        <AiFillFolderAdd size='20px' data-tip='New Folder' onClick={handleNewFolder}/>
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
    </>
  )
}

export default FileExplorer