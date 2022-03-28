import React from 'react';
import ReactTooltip from 'react-tooltip';
import {AiFillFolderAdd, AiFillFileAdd} from 'react-icons/ai'

const FileExplorer = () => {
  return (
    <>
        <div className='p-2 overflow-auto' style={{width: '20%', height: '92%', backgroundColor: '#1c2333'}}>
            
            <div className='flex justify-between'>
                <div className='ml-2 font-semibold text-2xl'>Files</div>
                <div className='flex flex-row-reverse'>
                    <div className='ml-2 py-2'>
                        <AiFillFileAdd size='20px' data-tip='New File'/>
                        <ReactTooltip/>
                    </div>
                    <div className='ml-2 py-2.5'>
                        <AiFillFolderAdd size='20px' data-tip='New Folder'/>
                        <ReactTooltip/>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default FileExplorer