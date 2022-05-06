import React, { useState } from 'react'
import Navbar from './Navbar';
import Modal from 'react-modal'
import { customStyles } from '../CodePlayGround/folderModalStyles';
import NewProjectModal from './Modals/NewProjectModal';

Modal.setAppElement('#root')
const cS = JSON.parse(JSON.stringify(customStyles));
cS.content.width = '30%'
cS.content.height = '65%'

const Dashboard = ({user, setUser, setCurrentProject}) => {
  const [openNewProjectModal, setOpenNewProjectModal] = useState(false)
  return (
      <>
        <Navbar user={user} setOpenNewProjectModal={setOpenNewProjectModal}/>

        <Modal
        isOpen={openNewProjectModal}
        style={cS}
        contentLabel='New Project'
        >
          <NewProjectModal setOpenNewProjectModal={setOpenNewProjectModal} user={user} setUser={setUser} setCurrentProject={setCurrentProject}/>
        </Modal>
      </>
  )
}

export default Dashboard