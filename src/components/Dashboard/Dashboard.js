import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import ProjectsList from './ProjectsList';
import Modal from 'react-modal'
import { customStyles } from '../CodePlayGround/folderModalStyles';
import NewProjectModal from './Modals/NewProjectModal';
import SnippetsList from './SnippetsList';
import { getUser } from '../../services/user/apiCalls'
import { useHistory } from 'react-router-dom';

Modal.setAppElement('#root')
const cS = JSON.parse(JSON.stringify(customStyles));
cS.content.width = '30%'
cS.content.height = '90%'

const Dashboard = ({user, setUser}) => {
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

  const [openNewProjectModal, setOpenNewProjectModal] = useState(false)

  if (user){
    return (
        <>
          <Navbar user={user} setUser={setUser} setOpenNewProjectModal={setOpenNewProjectModal}/>
          <ProjectsList user={user} showClone={false} loggedInUser={user} setUser={setUser}/>
          <SnippetsList user={user} loggedInUser={user}/>

          <Modal
          isOpen={openNewProjectModal}
          style={cS}
          contentLabel='New Project'
          >
            <NewProjectModal setOpenNewProjectModal={setOpenNewProjectModal} user={user} setUser={setUser}/>
          </Modal>
        </>
    )
  }
  return null
}

export default Dashboard