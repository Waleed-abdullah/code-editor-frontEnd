import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import SnippetBlock from './SnippetBlock'

const SnippetsList = ({user}) => {
    const location = useLocation()
    let snippetsList
    let ignore = false
    if (location.pathname === '/profile/@me'){
        ignore = true
        snippetsList = user.snippets        
    }
    else {snippetsList = user.snippets.filter((snippet, index) => index < 3)}

    return (
        <>
            <div className='text-white mt-8 ml-6 mr-6'>
                <h1 className='text-2xl'>Recent Snippets</h1>

                <div className='flex justify-start w-full mt-5 flex-wrap'>
                    {snippetsList.length === 0 ? 
                    <div className='text-lg'><i>No recent snippets</i></div> : 
                    snippetsList.map(snippet => (
                        <SnippetBlock key={snippet.id} snippet={snippet}/>
                    ))}
                </div>
                
                {user.snippets.length > 3 && !ignore ?
                <div className='pl-2 text-md font-bold pt-2 hover:underline' style={{color: 'rgb(108, 199, 246)'}}>
                    <Link to={`/profile/@me`}>See more</Link>
                </div>
                : null}
            </div>
        </>
    )
}

export default SnippetsList