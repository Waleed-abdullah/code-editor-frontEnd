import React, { useRef } from 'react'

const Output = ({saved, openFile}) => {
    const fileExtension = openFile.split('/')[openFile.split('/').length-1]?.includes(".html")
    const src = useRef('')

    if (fileExtension) {
        src.current = openFile
    }

    return (
    <>
        <iframe key={saved} id='output' className='bg-white' width="30%" height="92%" src={`http://localhost:5000/get/abd/TestDir` + src.current}></iframe>
    </>
    )
}

export default Output