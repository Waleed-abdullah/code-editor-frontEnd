import React from 'react'

const Stdout = ({stdout}) => {
    return (
        <div className='w-full text-white mt-2 overflow-auto px-2 py-1 whitespace-pre-wrap' style={{height: '26%'}}>
            {stdout}
        </div>
    )
}

export default Stdout