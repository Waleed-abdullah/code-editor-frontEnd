import React, { useEffect, useState } from 'react'
import Editor from '@monaco-editor/react';
import { getFileContent } from '../../services/fileExplorer/apiCalls';

const MonacoEditor = ({openFile}) => {
    const [fileContent, setFileContent] = useState('')
    
    useEffect(() => {
        if (openFile !== ''){
            fetchContent() 
        }
    }, [openFile])

    const fetchContent = async () => {
        const data = await getFileContent('abd', 'TestDir', openFile)
        console.log(data)
        setFileContent(data)
    }

  return (
    <>
    <div style={{width: '50%', height: '92%'}}>
        <Editor
        theme="vs-dark"
        height="100%"
        //path={file.name}
        defaultLanguage='css'
        defaultValue={fileContent}
        value={fileContent}
        //onChange={handleEditorChange}
        />
    </div>
    </>
  )
}

export default MonacoEditor