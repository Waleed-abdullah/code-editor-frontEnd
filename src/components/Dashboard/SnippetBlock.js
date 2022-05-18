import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectBlock.css'
import { getLang } from './langSelect'

const SnippetBlock = ({snippet}) => {
    let lang = getLang(snippet.language)
    lang = lang[0].toUpperCase() + lang.substring(1, lang.length)
    return (
        <>
            <div className='mr-4 px-2 w-56 rounded-xl glass'>
                <div className='text-lg font-bold pt-2 hover:underline' style={{color: 'rgb(108, 199, 246)'}}>
                    <Link to={`/editor/snippets/${snippet.name}/${snippet.language}`}>{snippet.name}</Link>
                </div>
                <div className='pb-4 mt-1'>
                    {snippet.description === '' ? "No description provided" : snippet.description}
                </div>
                <div className='pb-4'>
                    <span style={{color: 'rgb(108, 199, 246)'}}>Language:</span> {lang}
                </div>
            </div>
        </>
    )
}

export default SnippetBlock