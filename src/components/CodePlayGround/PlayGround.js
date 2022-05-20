import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import FileExplorer from './FileExplorer'
import MonacoEditor from './MonacoEditor'
import Navbar from './Navbar'
import Output from './Output'

const PlayGround = ({user}) => {
  const { projectName } = useParams()
  const [openFile, setOpenFile] = useState('')
  const [saved, setSaved] = useState(false)
  return (
      <>
        <div className='text-white overflow-hidden' style={{height: '100vh', backgroundColor: 'rgb(21,21,21,1)'}}>
            
            <Navbar user={user} currentProject={projectName}/>

            <div className='flex w-full' style={{height: '91.5%'}}>
                <FileExplorer setOpenFile={setOpenFile} user={user} currentProject={projectName}/>
                <MonacoEditor openFile={openFile} setSaved={setSaved} saved={saved} user={user} currentProject={projectName}/>
                <Output saved={saved} openFile={openFile} user={user} currentProject={projectName}/>
            </div>

        </div>
      </>
  )
}

export default PlayGround

// TODO: Add file icons
// TODO: Deal with save
