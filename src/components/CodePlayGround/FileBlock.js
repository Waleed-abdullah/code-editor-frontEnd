import React from 'react'

const FileBlock = ({name, counter, path, fileSelectedRef}) => {
  const padding = counter + 'em'

  const handleClick = () => {
    fileSelectedRef.current = path
  }
  return (
    <>
        <div className='w-full flex pl-5 pt-2 pb-2 mt-2 bg-blue-900 rounded-lg' style={{paddingLeft: padding}} onClick={handleClick}>
            {name}
        </div>
    </>
  )
}

export default FileBlock