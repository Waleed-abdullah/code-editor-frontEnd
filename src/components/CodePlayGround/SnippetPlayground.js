import React from 'react'
//import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import SnippetMonaco from './SnippetMonaco'

const SnippetPlayground = ({user}) => {
    //const { snippetName } = useParams() 
    return (
        <>
            <div className='text-white overflow-hidden' style={{height: '100vh', backgroundColor: 'rgb(21,21,21,1)'}}>
                <Navbar user={user} currentProject={'Test'}/>

                <div className='w-full h-full'>
                    <SnippetMonaco/>
                </div>
            </div>
        </>
    )
}

export default SnippetPlayground