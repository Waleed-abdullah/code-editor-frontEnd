import axios from "../../axios";

const baseURL = '/fileExplorer/'

const createUserFolder = async (userID) => {
    const url = baseURL + 'createUserFolder';
    await axios.post(url, {userID});
}

const createNewProject = async (userID, dirName) => {
    const url = baseURL + 'createProjectDir';
    await axios.post(url, {userID, dirName})
}

const createNewFolder = async (userID, insidePath, folderName, currProjectName) => {
    const url = baseURL + 'createFolder'
    await axios.post(url, {userID, insidePath, folderName, currProjectName})
}

const createNewFile = async (userID, insidePath, fileName, currProjectName) => {
    const url = baseURL + 'createFile';
    await axios.post(url, {userID, insidePath, fileName, currProjectName})
}

const updateFile = async (code, userID, currProjectName, currFileName) => {
    const url = baseURL + 'updateCode';
    await axios.post(url, {code, userID, currProjectName, currFileName})
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
}