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
        <div className='text-white overflow-hidden' style={{height: '100vh', backgroundColor: 'rgb(21,21,21,1)'}}>
            
            <Navbar/>

            <div className='flex w-full' style={{height: '92.4%'}}>
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
