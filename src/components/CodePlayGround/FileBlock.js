import React from 'react'

const FileBlock = ({name, counter}) => {
    const padding = counter + 'em'
  return (
    <>
        <div className='w-full flex pl-5 pt-2 pb-2 mt-2 bg-blue-900 rounded-lg' style={{paddingLeft: padding}}>
            {name}
        </div>
    </>
  )
}

export default FileBlock