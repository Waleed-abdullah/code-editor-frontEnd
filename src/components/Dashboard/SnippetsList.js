import React from 'react'
import SnippetBlock from './SnippetBlock'

const SnippetsList = ({user}) => {
    const snippetsList = user.snippets.filter((snippet, index) => index < 3)

    return (
        <>
            <div className='text-white mt-8 ml-6 mr-6'>
                <h1 className='text-2xl'>Recent Snippets</h1>

                <div className='flex justify-start w-full mt-5'>
                    {snippetsList.length === 0 ? 
                    <div className='text-lg'><i>No recent snippets</i></div> : 
                    snippetsList.map(snippet => (
                        <SnippetBlock key={snippet.id} snippet={snippet}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SnippetsList