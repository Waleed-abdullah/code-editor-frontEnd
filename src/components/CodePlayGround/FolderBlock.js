import React, { useState } from 'react'
import {AiFillFolder, AiFillFolderOpen } from 'react-icons/ai'
import FileBlock from './FileBlock'

const FolderBlock = ({name, folders, counter, path, folderSelectedRef, fileSelectedRef, selected, setOpenFile}) => {
    const [show, setShow] = useState(false)
    const seenFolder = {}
    const rootFiles = []

    for (let i = 0; i < folders?.length; i++){
        if (folders[i].length !== counter){
            if (counter !== folders[i].length-1){
                if (seenFolder[folders[i][counter]]){
                    seenFolder[folders[i][counter]].push(folders[i])
                }
                else{
                    seenFolder[folders[i][counter]] = []
                    seenFolder[folders[i][counter]].push(folders[i])
                }
            }
            else {
                const emptyFolder = folders[i][counter][folders[i][counter].length-1] === '?' ? true : false
                if (emptyFolder){
                  seenFolder[folders[i][counter].split('?')[0]] = []
                  seenFolder[folders[i][counter].split('?')[0]].push(folders[i])
                }
                else{
                    rootFiles.push(folders[i][counter])
                }
            }
        }
    }
    
    const keys = Object.keys(seenFolder)
    counter++

    const handleClick = () => {
        setShow(!show)
        folderSelectedRef.current = path
        selected.current.path = path
        selected.current.flag = 'folder'
    }

  return (
      <div className='border-l-2 pl-4' style={{borderColor: 'rgb(108, 199, 246)'}}>
        <button className='w-full flex hover:bg-slate-700 pb-0.5 pt-0.5 focus:bg-slate-700' onClick={handleClick}>
            {!show ? <div className='py-1 ml-1 mr-0.5' style={{color: 'rgb(100, 210, 255)'}}><AiFillFolder/></div> : <div className='py-1 ml-1 mr-0.5' style={{color: 'rgb(100, 210, 255)'}}><AiFillFolderOpen/></div>}
            <div className='pl-1'>{name}</div>
        </button>

        {show ?
            keys.map((key) => (
                <FolderBlock key={path + '/' + key} name={key} folders={seenFolder[key]} counter={counter} path={path + '/' + key} folderSelectedRef={folderSelectedRef} fileSelectedRef={fileSelectedRef} selected={selected} setOpenFile={setOpenFile}/>
            )) : null
        }

        {show ?
            rootFiles.map((file) => (
                <FileBlock key={path + '/' + file} name={file} counter={counter} path={path + '/' + file} fileSelectedRef={fileSelectedRef} selected={selected} setOpenFile={setOpenFile}/>
            )) : null
        }
        
      </div>
  )
}

export default FolderBlock