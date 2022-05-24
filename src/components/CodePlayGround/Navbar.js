import React from 'react'

const Navbar = ({user, currentProject}) => {
  return (
    <>
        <nav className='text-white px-2 py-3 sticky top-0' style={{borderBottomWidth: '1px', backgroundColor: 'rgb(21,21,21,1)', borderBottomColor: 'rgb(108, 199, 246)'}}>
            <div className='w-full flex justify-between'>
                <div className='flex' style={{width: '70%'}}>
                    <div className='ml-4'>
                        <img className='rounded-full w-7 h-7' alt='profilePic' src={user.photoURL}/>
                    </div>
                    <div className='ml-4 pt-1'>{user.name}</div>
                    <div className='ml-4 pt-1'>{'/'+currentProject}</div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
// backgroundColor: "#1c2333"