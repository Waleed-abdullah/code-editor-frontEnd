import React from 'react'
import {AiFillFile} from 'react-icons/ai'

const FileBlock = ({name, path, fileSelectedRef, selected, setOpenFile}) => {

  const handleClick = () => {
    fileSelectedRef.current = path
    selected.current.path = path
    selected.current.flag = 'file'
  }

  const handleDoubleClick = () => {
    setOpenFile(path)
  }

  return (
    <div className='pl-4 border-l-2' style={{borderColor: 'rgb(108, 199, 246)'}}>
        <button className='w-full flex hover:bg-slate-700 focus:bg-slate-700 pb-0.5 pt-0.5' onClick={handleClick} onDoubleClick={handleDoubleClick}>
          <div className='py-1'><AiFillFile/></div>
          <div className='pl-1'>{name}</div>
        </button>
    </div>
  )
}

export default FileBlock