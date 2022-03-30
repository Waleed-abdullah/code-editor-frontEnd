import React, { useState } from 'react'
import {AiFillFolder} from 'react-icons/ai'
import FileBlock from './FileBlock'

const FolderBlock = ({name, folders, counter}) => {
    const [show, setShow] = useState(false)
    const seenFolder = {}
    const rootFiles = []
 

    for (let i = 0; i < folders.length; ++i){
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
            rootFiles.push(folders[i][counter])
        }
    }
    
    const keys = Object.keys(seenFolder)
    const padding = counter + 'em'
    ++counter


    const handleClick = () => {
        setShow(!show)
    }

  return (
      <>
        <div className={`w-full flex pt-2 pb-2 mt-2 bg-blue-900 rounded-lg`} style={{paddingLeft: padding}} onClick={handleClick}>
            <div className='py-1'><AiFillFolder/></div>
            <div className='pl-1'>{name}</div> 
        </div>

        {show ?
            keys.map((key) => (
                <FolderBlock key={key+counter} name={key} folders={seenFolder[key]} counter={counter}/>
            )) : console.log('')
        }

        {show ?
            rootFiles.map((file) => (
                <FileBlock key={file+counter} name={file} counter={counter}/>
            )) : console.log('')
        }
        
      </>
  )
}

export default FolderBlock