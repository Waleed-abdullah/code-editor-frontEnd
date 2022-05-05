import React from 'react'
import Navbar from './Navbar';

const Dashboard = ({user, setUser}) => {
  return (
      <>
        <Navbar user={user} setUser={setUser}/>
      </>
  )
}

export default Dashboard