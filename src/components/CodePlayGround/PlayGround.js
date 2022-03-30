import React from 'react'
import FileExplorer from './FileExplorer'
import Navbar from './Navbar'

const PlayGround = () => {
  return (
      <>
        <div className='text-white overflow-hidden' style={{backgroundColor: '#0e1525', height: '100vh'}}>
            
            <Navbar/>

            <div className='flex w-full h-full' style={{backgroundColor: '#0e1525'}}>
                <FileExplorer/>
                <div className='bg-red-200' style={{width: '50%', height: '92%'}}>Editor</div>
                <div className='bg-yellow-200' style={{width: '30%', height: '92%'}}>Output</div>
            </div>

        </div>
      </>
  )
}

export default PlayGround