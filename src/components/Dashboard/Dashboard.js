import React, { useState } from 'react'
import Navbar from './Navbar';
import ProjectsList from './ProjectsList';
import Modal from 'react-modal'
import { customStyles } from '../CodePlayGround/folderModalStyles';
import NewProjectModal from './Modals/NewProjectModal';
import SnippetsList from './SnippetsList';

Modal.setAppElement('#root')
const cS = JSON.parse(JSON.stringify(customStyles));
cS.content.width = '30%'
cS.content.height = '79%'

const Dashboard = ({user, setUser}) => {
  const [openNewProjectModal, setOpenNewProjectModal] = useState(false)
  return (
      <>
        <Navbar user={user} setUser={setUser} setOpenNewProjectModal={setOpenNewProjectModal}/>
        <ProjectsList user={user} showClone={false} loggedInUser={user} setUser={setUser}/>
        <SnippetsList user={user}/>

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

export default Dashboard