import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import SnippetMonaco from './SnippetMonaco'
import StdContainer from './StdContainer'
import { getUser } from '../../services/user/apiCalls'
import { useHistory } from 'react-router-dom'

const SnippetPlayground = ({user, setUser}) => {
    let history = useHistory()
    useEffect(async () => {
        if (!JSON.parse(localStorage.getItem('logged-in-user')) && !user) {
            history.push(`/`)
        }
        if (JSON.parse(localStorage.getItem('logged-in-user')) && !user){
            const userFound = await getUser(JSON.parse(localStorage.getItem('logged-in-user')).id)
            userFound.projects.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate))
            userFound.snippets.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate))
            setUser(userFound)
        }
    }, [])
    
    const { snippetName, language } = useParams()
    const [fileContent, setFileContent] = useState('')

    if (user) {
        return (
            <>
                <div className='text-white overflow-hidden' style={{height: '100vh', backgroundColor: 'rgb(21,21,21,1)'}}>
                    <Navbar user={user} currentProject={snippetName} openFile={null}/>
    
                    <div className='w-full h-full'>
                        <SnippetMonaco user={user} language={language} currentProject={snippetName} fileContent={fileContent} setFileContent={setFileContent}/>
                        
                        <StdContainer language={language} fileContent={fileContent}/>
                    </div>
                </div>
            </>
        )
    }
    return null
}

export default SnippetPlayground