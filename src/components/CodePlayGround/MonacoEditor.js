import React, { useEffect, useState } from 'react'
import Editor from '@monaco-editor/react';
import { getFileContent, updateFile } from '../../services/fileExplorer/apiCalls';
import { icons } from '../../icons/icons';
import { Markup } from 'interweave';

const MonacoEditor = ({openFile, setSaved, saved}) => {
    const fileExtension = openFile.split('/')[openFile.split('/').length-1].split('.')[openFile.split('/')[openFile.split('/').length-1].split('.').length-1]
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
    <div style={{width: '52%', resize: 'horizontal', overflow: 'auto', maxWidth: '100%'}}>
        <div className='w-full' style={{backgroundColor: 'rgb(21,21,21,1)'}}>
            <div className='pl-3 pr-3 pt-1 pb-1 flex justify-start w-max' 
            style={{
            borderBottomColor: 'rgb(108, 199, 246)', borderWidth: '1px', 
            borderLeftColor: 'rgb(52, 52, 52)', borderRightColor: 'rgb(52, 52, 52)', 
            borderTopColor: 'rgb(52, 52, 52)'
            }}>
            
            {icons[fileExtension] ? <div className='pt-0.5'> <Markup content={icons[fileExtension]}/> </div> : null}
            <div className=''><i>{openFile.split('/')[openFile.split('/').length-1]}</i></div>
            
            </div>
        </div>

        <Editor
        height='100%'
        path={openFile}
        defaultValue={fileContent}
        value={fileContent}
        theme='vs-dark'
        onChange={handleEditorChange}
        />
    </div>
    </>
  )
}

export default MonacoEditor