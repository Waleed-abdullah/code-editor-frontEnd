import React, { useEffect, useState } from 'react'
import Editor from '@monaco-editor/react';
import { getFileContent, updateFile } from '../../services/fileExplorer/apiCalls';

const MonacoEditor = ({openFile, setSaved, saved}) => {
    const [fileContent, setFileContent] = useState('')
    
    useEffect(() => {
        if (openFile !== ''){
            fetchContent() 
        }
    }, [openFile])

    const fetchContent = async () => {
        const data = await getFileContent('abd', 'TestDir', openFile)
        setFileContent(data)
        setSaved(!saved)
    }

    const handleEditorChange = async (value, event) => {
        if (event.changes[0].text === '\r\n' || event.changes[0].text === ""){
            console.log('Updating')
            await updateFile(value, 'abd', 'TestDir', openFile)
            setSaved(!saved)
        }
    }

  return (
    <>
    <div style={{width: '50%', height: '92%'}}>
        <div className='w-full bg-slate-900 border-b-2 border-b-white'>
            <div className='bg-black pl-2 pt-1 pb-1'>{openFile.split('/')[openFile.split('/').length-1]}</div>
        </div>

        <Editor
        theme="vs-dark"
        height="100%"
        path={openFile}
        defaultValue={fileContent}
        value={fileContent}
        onChange={handleEditorChange}
        />
    </div>
    </>
  )
}

export default MonacoEditor