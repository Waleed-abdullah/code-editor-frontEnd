import React, { useState } from 'react'
import Editor from '@monaco-editor/react'

const SnippetMonaco = () => {
    const [fileContent, setFileContent] = useState('')
    const handleEditorChange = () => {
        
    }

    return (
        <>
            <div style={{width: '100%', overflow: 'auto', height: '60%'}}>
                <Editor
                    height='100%'
                    path={'main.cpp'}
                    defaultValue={''}
                    theme='vs-dark'
                    onChange={handleEditorChange}    
                />
            </div>
        </>
    )
}

export default SnippetMonaco