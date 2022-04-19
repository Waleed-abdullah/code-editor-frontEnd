import React, { useRef } from 'react'

const Output = ({saved, openFile}) => {
    const fileExtension = openFile.split('/')[openFile.split('/').length-1]?.includes(".html")
    const src = useRef('')

    if (fileExtension) {
        src.current = openFile
    }

    return (
    <>
        <iframe title='output' style={{resize: 'horizontal', overflow: 'auto', direction: 'rtl', maxWidth: '100%', minWidth:'30%'}} key={saved} id='output' className='bg-white' src={`http://localhost:5000/get/abd/TestDir` + src.current}></iframe>
    </>
    )
}

export default Output