import React from 'react';
import axios from 'axios';

import { code } from './sampleCode';

import {createUserFolder, createNewProject, createNewFile, updateFile, renameFile, deleteFile} from './services/fileExplorer/apiCalls'

const baseURL = 'http://localhost:5000';
const userID = 'abcdefghijkl123456789'
const currentProjectDir = 'TestDir';
const currentFileName = 'index.html';
const dirName = 'TestDir';
const fileName = 'index.html'

const Test = () => {
    const handleClick = () => {
        createNewProject(userID, dirName)
    }

    const handleFileCreation = () => {
        createNewFile(fileName, userID, dirName)
    }

    const handleSendData = () => {
        updateFile(code, userID, dirName, fileName)
    }

    const handleNewFolder = () => {
        createUserFolder(userID)
    }

    const handleRenameFile = () => {
        renameFile(userID, fileName, 'main.html', dirName);
    }

    const handleDeleteFile = () => {
        deleteFile(userID, 'main.html', dirName);
    }

    return (
        <div>
            <button onClick={handleNewFolder} className='bg-blue-200'>Create a User Folder</button>
            <br></br>
            <button onClick={handleClick} className='bg-blue-200'>Create a New Project</button>
            <br></br>
            <button onClick={handleFileCreation} className='bg-blue-400'>Create a New File</button>
            <br></br>
            <button onClick={handleSendData} className='bg-red-300'>Send Data</button>
            <br></br>
            <button onClick={handleRenameFile} className='bg-red-300'>Rename File</button>
            <br></br>
            <button onClick={handleDeleteFile} className='bg-red-400'>Delete File</button>
            {/*<iframe title='Output' src={`http://localhost:5000/get/hehe/index.html`}></iframe>*/}
        </div>
    )
}

export default Test