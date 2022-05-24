import React, { useState } from 'react'

const Stdin = ({stdin, setStdin}) => {
    return (
        <div className='w-full text-white mt-2 overflow-auto px-2 py-1' style={{height: '26%'}}>
            <textarea
            className='w-full px-2 py-1 rounded-lg'
            style={{height: '90%', backgroundColor: 'transparent', border: '1px solid white'}}
            id='stdin'
            name='stdin'
            defaultValue={stdin}
            onChange={(event) => setStdin(event.target.value)}>
            </textarea>
        </div>
    )
}

export default Stdin