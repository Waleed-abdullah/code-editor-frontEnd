import React, { useState } from 'react'
import FileExplorer from './FileExplorer'
import MonacoEditor from './MonacoEditor'
import Navbar from './Navbar'
import Output from './Output'

const PlayGround = () => {
  const [openFile, setOpenFile] = useState('')
  const [saved, setSaved] = useState(false)
  return (
      <>
        <div className='text-white overflow-hidden' style={{backgroundColor: '#0e1525', height: '100vh'}}>
            
            <Navbar/>

            <div className='flex w-full h-full' style={{backgroundColor: '#0e1525'}}>
                <FileExplorer setOpenFile={setOpenFile}/>
                <MonacoEditor openFile={openFile} setSaved={setSaved} saved={saved}/>
                <Output saved={saved} openFile={openFile}/>
            </div>

        </div>
      </>
  )
}

export default PlayGround

// TODO: Add file icons
// TODO: Deal with save
