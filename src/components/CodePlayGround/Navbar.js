import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='text-white px-2 py-3 sticky top-0' style={{borderBottomWidth: '1px', backgroundColor: 'rgb(21,21,21,1)', borderBottomColor: 'rgb(108, 199, 246)'}}>
            <div className='w-full flex justify-between'>
                <div className='flex' style={{width: '70%'}}>
                    <div className='ml-4'>Title</div>
                    <div className='ml-4'>Profile-Pic</div>
                    <div className='ml-4'>Name/ProjectName</div>
                </div>
                <div className='flex flex-row-reverse' style={{width: "30%"}}>
                    <div className='mr-4'>Search</div>
                    <div className='mr-4'>Invite</div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
// backgroundColor: "#1c2333"