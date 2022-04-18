import React from 'react'

const ImageModal = ({setShow, path}) => {
    console.log(`http://localhost:5000/get/abd/TestDir` + path)

    return (
    <div className='w-full'>
        <div className='mr-auto ml-auto flex justify-center w-3/4 mt-4'>
            <img className='object-cover rounded-xl' src={`http://localhost:5000/get/abd/TestDir` + path}/>
        </div>
        <div className='flex justify-center absolute bottom-5 right-5'>
            <button className='text-white bg-blue-800 w-24 rounded-lg text-xl font-semibold hover:bg-blue-900 pt-1 pb-1' onClick={() => setShow(false)}>Close</button>
        </div>
    </div>
    )
}

export default ImageModal