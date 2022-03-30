import React, {useRef} from 'react';
import ReactTooltip from 'react-tooltip';
import {AiFillFolderAdd, AiFillFileAdd} from 'react-icons/ai'
import FileBlock from './FileBlock';
import FolderBlock from './FolderBlock';

const FileExplorer = React.memo(() => {
    const folderSelectedRef = useRef('/')
    const fileSelectedRef = useRef('')

    const counter = 1;
    const folders = {
        assets: [
          [ 'assets', 'explore_1.PNG' ],
          [ 'assets', 'explore_2.PNG' ],
          [ 'assets', 'explore_3.PNG' ],
          [ 'assets', 'explore_4.PNG' ],
          [ 'assets', 'explore_5.PNG' ],
          [ 'assets', 'explore_6.PNG' ],
          [ 'assets', 'fbClone_1.PNG' ],
          [ 'assets', 'fbClone_2.PNG' ],
          [ 'assets', 'fbClone_3.PNG' ],
          [ 'assets', 'fbClone_4.PNG' ],
          [ 'assets', 'Imgs', 'hehe', 'music_2.PNG' ],
          [ 'assets', 'Imgs', 'hehe', 'music_3.PNG' ],
          [ 'assets', 'Imgs', 'home.png' ],
          [ 'assets', 'Imgs', 'music_1.PNG' ]
        ],
        components: [
          [ 'components', 'Education.js' ],
          [ 'components', 'HomePage.css' ],
          [ 'components', 'HomePage.js' ],
          [ 'components', 'Navbar.css' ],
          [ 'components', 'Navbar.js' ],
          [ 'components', 'ParticleBackground.js' ],
          [ 'components', 'particleConfig.js' ],
          [ 'components', 'ProjectItem.js' ],
          [ 'components', 'Projects.css' ],
          [ 'components', 'Projects.js' ],
          [ 'components', 'Skills.css' ],
          [ 'components', 'Skills.js' ]
        ]
      }

      const rootFiles = [ 'App.js', 'index.css', 'index.js' ]

      const keys = Object.keys(folders)

    const handleNewFolder = () => {
        console.log(folderSelectedRef.current)
    }

    const handleNewFile = () => {

    }

  return (
    <>
        <div className='p-2 overflow-auto' style={{width: '20%', height: '92%', backgroundColor: '#1c2333'}}>
            
            {/*Header*/}
            <div className='flex justify-between'>
                <div className='ml-2 font-semibold text-2xl'>Files</div>
                <div className='flex flex-row-reverse'>
                    <div className='ml-2 py-2'>
                        <AiFillFileAdd size='20px' data-tip='New File' onClick={handleNewFile}/>
                        <ReactTooltip/>
                    </div>
                    <div className='ml-2 py-2.5'>
                        <AiFillFolderAdd size='20px' data-tip='New Folder' onClick={handleNewFolder}/>
                        <ReactTooltip/>
                    </div>
                </div>
            </div>

            {/*Render existing folder and files*/}
            {
                keys.map((key) => (
                    <FolderBlock key={'/'+key} name={key} folders={folders[key]} counter={counter} path={'/'+key} folderSelectedRef={folderSelectedRef} fileSelectedRef={fileSelectedRef}/>
                ))
            }

            {
                rootFiles.map((file) => (
                    <FileBlock key={'/'+file} name={file} counter={counter} path={'/'+file} fileSelectedRef={fileSelectedRef}/>
                ))
            }

        </div>
    </>
  )
})

export default FileExplorer