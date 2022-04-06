import React, { useEffect, useState } from 'react'

const Output = ({saved}) => {
    return (
    <>
        <iframe key={saved} id='output' className='bg-white' width="30%" height="92%" src='http://localhost:5000/get/abd/TestDir/index.html'></iframe>
    </>
    )
}

export default Output