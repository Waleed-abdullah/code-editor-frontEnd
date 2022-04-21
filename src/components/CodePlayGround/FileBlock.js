import React, { useState } from 'react'
import {AiFillFile} from 'react-icons/ai'
import { Markup } from 'interweave';
import {icons} from '../../icons/icons.js'
import Modal from 'react-modal'
import ImageModal from './Modals/ImageModal.js';
import { customStyles } from './folderModalStyles.js';

const cS = JSON.parse(JSON.stringify(customStyles));
cS.content.width = '50%'
cS.content.height = '80%'

const FileBlock = ({name, path, fileSelectedRef, selected, setOpenFile}) => {
  const fileExtension = path.split('/')[path.split('/').length-1].split('.')[path.split('/')[path.split('/').length-1].split('.').length-1]
  const handleClick = () => {
    fileSelectedRef.current = path
    selected.current.path = path
    selected.current.flag = 'file'
  }
  const [show, setShow] = useState(false)

  const handleDoubleClick = () => {
    if (fileExtension !== 'jpg' && fileExtension !== 'jpeg' &&  fileExtension !== 'png' && fileExtension !== 'gif'){
      setOpenFile(path)
    }
    else{
      setShow(true)
    }
  }

  return (
    <>
    <div className='pl-2 border-l-2 w-full' style={{borderColor: 'rgb(108, 199, 246)'}}>
        <button className='w-full flex justify-start hover:bg-slate-800 focus:bg-slate-700 pb-1 pt-0.5' onClick={handleClick} onDoubleClick={handleDoubleClick}>
          {icons[fileExtension] ?<div> <Markup content={icons[fileExtension]}/> </div> : <div className='ml-1 pt-1 mr-0.5'><AiFillFile/></div>}
          <div className='pl-1'>{name}</div>
        </button>
    </div>

    <Modal
    isOpen={show}
    style={cS}
    contentLabel='Image'>
      <ImageModal setShow={setShow} path={path}/>
    </Modal>
    </>
  )
}

export default FileBlock