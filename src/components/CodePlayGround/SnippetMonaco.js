import React, { useState, useEffect } from 'react'
import Editor from '@monaco-editor/react'
import { icons } from '../../icons/icons';
import { Markup } from 'interweave';
import { getSnippetContent, updateSnippet } from '../../services/fileExplorer/apiCalls';

const SnippetMonaco = ({user, language, currentProject, fileContent, setFileContent}) => {
    useEffect(() => {
        fetchContent()
    }, [])

    const handleEditorChange = async (value, event) => {
        if (event.changes[0].text === '\r\n' || event.changes[0].text === ""){
            await updateSnippet(value, user.id, currentProject, language)
        }
        setFileContent(value)
    }

    const fetchContent = async () => {
        const data = await getSnippetContent(user.id, currentProject, language)
        console.log(data)
        setFileContent(data)
    }

    return (
        <>
            <div className='w-max px-3 py-1 flex'
            style={{borderBottomColor: 'rgb(108, 199, 246)', borderWidth: '1px', 
            borderLeftColor: 'rgb(52, 52, 52)', borderRightColor: 'rgb(52, 52, 52)', 
            borderTopColor: 'rgb(52, 52, 52)'}}>
                {icons[language] ? <div className='pt-0.5'> <Markup content={icons[language]}/> </div> : null}
                <i>{'Snippet.'+language}</i>
            </div>

            <div style={{width: '100%', overflow: 'auto', height: '55%'}}>
                <Editor
                    height='100%'
                    path={'Snippet.'+language}
                    defaultValue={fileContent}
                    value={fileContent}
                    theme='vs-dark'
                    onChange={handleEditorChange}
                />
            </div>
        </>
    )
}

export default SnippetMonaco