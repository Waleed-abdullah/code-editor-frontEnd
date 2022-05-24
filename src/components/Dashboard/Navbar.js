import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import ReactTooltip from 'react-tooltip';
import { AiFillCaretDown } from 'react-icons/ai'
import { CgMathPlus } from 'react-icons/cg'
import { useHistory, Link } from 'react-router-dom'
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const Navbar = ({user, setUser, setOpenNewProjectModal}) => {
    let history = useHistory()
    const [search, setSearch] = useState()
    const handleKeyDown = (event) => {
        if (event.code === 'Enter'){
            history.push(`/search/${search}`)
        }
    }

    const handleLogOut = () => {
        localStorage.removeItem('logged-in-user')
        setUser(null)
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
                        <Link to={`/users/profile/${user.id}`}><img className='rounded-full w-8 h-8' alt='profilePic' src={user.photoURL}/></Link>
                    </div>
                    <div className='ml-3 mt-2 hover:underline'>
                        <Menu menuButton={<MenuButton className='flex'>{user.name}<AiFillCaretDown className='mt-2.5' size='15px'></AiFillCaretDown></MenuButton>}>
                            <Link to={`/users/profile/${user.id}`}>
                                <MenuItem>
                                    Profile
                                </MenuItem>
                            </Link>
                            <MenuItem onClick={handleLogOut}>
                                Log out
                            </MenuItem>
                        </Menu>
                    </div>
                </div>

                <div className='mt-0.5' style={{width: '40%'}}>
                    <input onChange={(event) => setSearch(event.target.value)} onKeyDown={handleKeyDown} className='w-full rounded-md pl-2 text-black py-1' type='text' placeholder='Search users'/>
                </div>

                <div className='flex flex-row-reverse ml-28' style={{width: "20%"}}>
                    <div className='mt-1 bg-blue-500 rounded-md hover:bg-blue-600'><CgMathPlus data-tip='New Project' color='white' size='30px' onClick={() => setOpenNewProjectModal(true)}/></div>
                    <ReactTooltip/>
                </div>

            </div>
        </nav>
    </>
    )
}

export default Navbar