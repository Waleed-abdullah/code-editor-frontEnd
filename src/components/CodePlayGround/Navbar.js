import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user, currentProject, openFile}) => {
    const src = useRef('')
    if (openFile) {
        const fileExtension = openFile.split('/')[openFile.split('/').length-1]?.includes(".html")
    
        if (fileExtension) {
            src.current = openFile
        }
    }

  return (
    <>
        <nav className='text-white px-2 py-3 sticky top-0' style={{borderBottomWidth: '1px', backgroundColor: 'rgb(21,21,21,1)', borderBottomColor: 'rgb(108, 199, 246)'}}>
            <div className='w-full flex justify-between'>
                <div className='flex justify-between w-full'>
                    <div className='flex' style={{width: '70%'}}>
                        <div className='ml-4'>
                            <Link to={`/dashboard/${user.name}`}><img className='rounded-full w-7 h-7' alt='profilePic' src={`http://localhost:5000/get/${user.id}/${user.name}.png`}/></Link>
                        </div>
                        <div className='ml-4 pt-1'>{user.name}</div>
                        <div className='ml-4 pt-1'>{'/'+currentProject}</div>
                    </div>
                    {openFile ? 
                        <div className='mt-1' style={{color: 'rgb(108, 199, 246)'}}>
                            <a target='_blank' className='hover:underline' href={`http://localhost:5000/get/${user.id}/projects/${currentProject}` + src.current}><i>Open Window in Tab</i></a>
                        </div>
                        :
                        null
                    }   
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
// backgroundColor: "#1c2333"