import React, { useState } from 'react'
import {AiFillFolder} from 'react-icons/ai'
import FileBlock from './FileBlock'

const FolderBlock = ({name, folders, counter}) => {
    const [hide, setHide] = useState(false)
    const seenFolder = {}
    const rootFiles = []
    const keys = Object.keys(seenFolder)
    const padding = counter + 'em'

    for (let i = 0; i < folders.length; ++i){
        if (counter != folders[i].length-1){
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
    
    ++counter

    const handleClick = () => {
        setHide(!hide)
    }

  return (
      <>
        <div className={`w-full flex pt-2 pb-2 mt-2 bg-blue-900 rounded-lg`} style={{paddingLeft: padding}} onClick={handleClick}>
            <div className='py-1'><AiFillFolder/></div>
            <div className='pl-1'>{name}</div> 
        </div>

        {hide ?
            keys.map((key) => (
                <FolderBlock key={key} name={key} folders={seenFolder[key]} counter={counter}/>
            )) : console.log('')
        }

        {hide ?
            rootFiles.map((file) => (
                <FileBlock key={file} name={file} counter={counter}/>
            )) : console.log('')
        }
        
      </>
  )
}

export default FolderBlock