import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FileExplorer from './FileExplorer'
import MonacoEditor from './MonacoEditor'
import Navbar from './Navbar'
import Output from './Output'
import { getUser } from '../../services/user/apiCalls'
import { useHistory } from 'react-router-dom'

const PlayGround = ({user, setUser}) => {
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

  const { projectName } = useParams()
  const [openFile, setOpenFile] = useState('')
  const [saved, setSaved] = useState(false)

  if (user) {
    return (
        <>
          <div className='text-white overflow-hidden' style={{height: '100vh', backgroundColor: 'rgb(21,21,21,1)'}}>
              
              <Navbar user={user} currentProject={projectName}/>

              <div className='flex w-full' style={{height: '91.5%'}}>
                  <FileExplorer setOpenFile={setOpenFile} user={user} currentProject={projectName}/>
                  <MonacoEditor openFile={openFile} setSaved={setSaved} saved={saved} user={user} currentProject={projectName}/>
                  <Output saved={saved} openFile={openFile} user={user} currentProject={projectName}/>
              </div>

          </div>
        </>
    )
  }
  return null
}

export default PlayGround

// TODO: Add file icons
// TODO: Deal with save
