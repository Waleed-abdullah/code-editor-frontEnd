import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import ReactTooltip from 'react-tooltip';
import { IoMdNotifications } from 'react-icons/io'
import { CgMathPlus } from 'react-icons/cg'
import { useHistory } from 'react-router-dom'
// import { MdNotificationsActive } from 'react-icons/md'

const Navbar = ({user, setOpenNewProjectModal}) => {
    let history = useHistory()
    const [search, setSearch] = useState()
    const handleKeyDown = (event) => {
        if (event.code === 'Enter'){
            history.push(`/search/${search}`)
        }
    }

  return (
    <>
        <Helmet>
            <style>{'body { background-color: rgb(21,21,21,1); }'}</style>
        </Helmet>

        <nav className='text-white px-2 py-3 sticky top-0' style={{borderBottomWidth: '1px', backgroundColor: 'rgb(21,21,21,1)', borderBottomColor: 'rgb(108, 199, 246)'}}>
            <div className='w-full flex justify-center'>
                
                <div className='flex' style={{width: '30%'}}>
                    <div className='ml-4'>
                        <img className='rounded-full w-8 h-8' alt='profilePic' src={user.photoURL}/>
                    </div>
                    <div className='ml-3 mt-2'>{user.name}</div>
                </div>

                <div className='mt-0.5' style={{width: '40%'}}>
                    <input onChange={(event) => setSearch(event.target.value)} onKeyDown={handleKeyDown} className='w-full rounded-md pl-2 text-black py-1' type='text' placeholder='Search users'/>
                </div>

                <div className='flex flex-row-reverse' style={{width: "30%"}}>
                    <div className='mr-4 mt-2'><CgMathPlus data-tip='New Project' color='white' size='25px' onClick={() => setOpenNewProjectModal(true)}/></div>
                    <ReactTooltip/>
                    <div className='mr-4 mt-2'><IoMdNotifications data-tip='Notifications' color='white' size='25px'/></div>
                    <ReactTooltip/>
                </div>

            </div>
        </nav>
    </>
  )
}

export default Navbar