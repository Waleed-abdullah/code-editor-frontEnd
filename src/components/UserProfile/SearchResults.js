import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getUsers } from '../../services/user/apiCalls'
import { Helmet } from 'react-helmet'
import Result from './Result'

const SearchResults = ({user}) => {
    const [results, setResults] = useState([])
    const { query } = useParams()

    useEffect(async () => {
        const users = await getUsers(query)
        setResults(users)
    }, [])

    return (
        <>
            <Helmet>
                <style>{'body { background-color: rgb(21,21,21,1); }'}</style>
            </Helmet>

            <div className='flex justify-end mr-5 mt-5' style={{color: 'rgb(108, 199, 246)'}}>
                <Link className='hover:underline' to={`/dashboard/${user.name}`}><i>Back to Dashboard</i></Link>
            </div>

            <div className='text-white text-lg mt-5 ml-5'>Search results for: <i>{query}</i> </div>

            <div className='text-white ml-3 mt-5'>
                {
                    results.map(r => (
                        <Result key={r.id} user={r}/> 
                    ))
                }
            </div>
        </>
    )
}

export default SearchResults