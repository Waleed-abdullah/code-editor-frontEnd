import React, { useState } from 'react'
import FileExplorer from './FileExplorer'
import MonacoEditor from './MonacoEditor'
import Navbar from './Navbar'

const PlayGround = () => {
  const [openFile, setOpenFile] = useState('')
  return (
      <>
        <div className='text-white overflow-hidden' style={{backgroundColor: '#0e1525', height: '100vh'}}>
            
            <Navbar/>

            <div className='flex w-full h-full' style={{backgroundColor: '#0e1525'}}>
                <FileExplorer setOpenFile={setOpenFile}/>
                <MonacoEditor openFile={openFile}/>
                <div className='bg-yellow-200' style={{width: '30%', height: '92%'}}>Output</div>
            </div>

        </div>
      </>
  )
}

export default PlayGround