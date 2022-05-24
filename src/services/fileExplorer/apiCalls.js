import axios from "../../axios";

const baseURL = '/fileExplorer/'

const createUserFolder = async (userID) => {
    const url = baseURL + 'createUserFolder';
    await axios.post(url, {userID});
}

const createProjectsFolder = async (userID) => {
    const url = baseURL + 'createProjectsFolder';
    await axios.post(url, {userID})
}

const createSnippetsFolder = async (userID) => {
    const url = baseURL + 'createSnippetsFolder';
    await axios.post(url, {userID})
}

const createNewProject = async (userID, dirName, type) => {
    const url = baseURL + 'createProjectDir';
    await axios.post(url, {userID, dirName, type})
}

const createNewFolder = async (userID, insidePath, folderName, currProjectName) => {
    const url = baseURL + 'createFolder'
    await axios.post(url, {userID, insidePath, folderName, currProjectName})
}

const createNewFile = async (userID, insidePath, fileName, currProjectName) => {
    const url = baseURL + 'createFile';
    await axios.post(url, {userID, insidePath, fileName, currProjectName})
}

const createSnippetFile = async (userID, fileName, currProjectName) => {
    const url = baseURL + 'createSnippetFile'
    await axios.post(url, {userID, fileName, currProjectName})
}

const updateFile = async (code, userID, currProjectName, insidePath) => {
    const url = baseURL + 'updateCode';
    await axios.post(url, {code, userID, currProjectName, insidePath})
}

const updateSnippet = async (code, userID, currentSnippetName, language) => {
    const url = baseURL + 'updateSnippet'
    await axios.post(url, {code, userID, currentSnippetName, language})
}

const renameFile = async (userID, currFileName, newFileName, insidePath, currProjectName) => {
    const url = baseURL + 'renameFile';
    await axios.post(url, {userID, currFileName, currProjectName, newFileName, insidePath})
}

const deleteFile = async (userID, insidePath, currProjectName) => {
    const url = baseURL + 'deleteFile';
    await axios.post(url, {userID, insidePath, currProjectName});
}

const deleteFolder = async (userID, insidePath, currProjectName) => {
    const url = baseURL + 'deleteFolder'
    await axios.post(url, {userID, insidePath, currProjectName});
}

const getProjectDir = async (userID, currProjectName) => {
    const url = baseURL + 'getFiles/' + userID + '/' + currProjectName;
    const res = await axios.get(url);
    return res.data.result;
}

const getFileContent = async (userID, currProjectName, insidePath) => {
    const url = baseURL + 'getContent/?userID=' + userID + '&currProjectDir=' + currProjectName + '&insidePath=' + insidePath
    const res = await axios.get(url)
    return res.data.data;
}

const getSnippetContent = async (userID, currentSnippetName, language) => {
    const url = baseURL + 'getSnippetContent?userID=' + userID + '&currentSnippetName=' + currentSnippetName + '&language=' + language
    const res = await axios.get(url)
    return res.data.data
}


const uploadFile = async (userID, currProjectName, insidePath, file) => {
    const fileName = file.name
    const url = baseURL + 'uploadAsset'
    const fileForm = new FormData()

    fileForm.append('file', file);
    fileForm.append('fileName', file.name);

    const res = await axios.post(url, fileForm)
    console.log(res)
    console.log("done")

    await axios.post('/fileExplorer/move', {userID, currProjectName, insidePath, fileName})
}

export {
    createUserFolder,
    createNewProject,
    createNewFile,
    createNewFolder,
    updateFile,
    renameFile,
    deleteFile,
    deleteFolder,
    getProjectDir,
    getFileContent,
    uploadFile,
    createProjectsFolder,
    createSnippetsFolder,
    createSnippetFile,
    getSnippetContent,
    updateSnippet,
}