import React from 'react'
import {AiFillFile} from 'react-icons/ai'
import { Markup } from 'interweave';
import {icons} from '../../icons/icons.js'

const FileBlock = ({name, path, fileSelectedRef, selected, setOpenFile}) => {
  const fileExtension = path.split('/')[path.split('/').length-1].split('.')[path.split('/')[path.split('/').length-1].split('.').length-1]
  const handleClick = () => {
    fileSelectedRef.current = path
    selected.current.path = path
    selected.current.flag = 'file'
  }

  const handleDoubleClick = () => {
    setOpenFile(path)
  }

  return (
    <div className='pl-4 border-l-2 w-full' style={{borderColor: 'rgb(108, 199, 246)'}}>
        <button className='w-full flex hover:bg-slate-700 focus:bg-slate-700 pb-1 pt-0.5' onClick={handleClick} onDoubleClick={handleDoubleClick}>
          {icons[fileExtension] ?<div> <Markup content={icons[fileExtension]}/> </div> : <div className='ml-1 pt-1 mr-0.5'><AiFillFile/></div>}
          <div className='pl-1'>{name}</div>
        </button>
    </div>
  )
}

export default FileBlock