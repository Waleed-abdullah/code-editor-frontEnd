import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import SnippetMonaco from './SnippetMonaco'
import StdContainer from './StdContainer'

const SnippetPlayground = ({user}) => {
    const { snippetName, language } = useParams()
    const [fileContent, setFileContent] = useState('')
    return (
        <>
            <div className='text-white overflow-hidden' style={{height: '100vh', backgroundColor: 'rgb(21,21,21,1)'}}>
                <Navbar user={user} currentProject={snippetName}/>

                <div className='w-full h-full'>
                    <SnippetMonaco user={user} language={language} currentProject={snippetName} fileContent={fileContent} setFileContent={setFileContent}/>
                    
                    <StdContainer language={language} fileContent={fileContent}/>
                </div>
            </div>
        </>
    )
}

export default SnippetPlayground