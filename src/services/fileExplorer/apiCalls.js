import axios from "../../axios";

const baseURL = '/fileExplorer/'

const createUserFolder = async (userID) => {
    const url = baseURL + 'createUserFolder';
    const res = await axios.post(url, {userID});
}

const createNewProject = async (userID, dirName) => {
    const url = baseURL + 'createProjectDir';
    const res = await axios.post(url, {userID, dirName})
}

const createNewFile = async (fileName, userID, currProjectName) => {
    const url = baseURL + 'createFile';
    const res = await axios.post(url, {fileName, userID, currProjectName})
}

const updateFile = async (code, userID, currProjectName, currFileName) => {
    const url = baseURL + 'updateCode';
    const res = await axios.post(url, {code, userID, currProjectName, currFileName})
}

const renameFile = async (userID, currFileName, newFileName, currProjectName) => {
    const url = baseURL + 'renameFile';
    const res = await axios.post(url, {userID, currFileName, currProjectName, newFileName})
}

const deleteFile = async (userID, fileName, currProjectName) => {
    const url = baseURL + 'deleteFile';
    const res = await axios.post(url, {userID, fileName, currProjectName});
    console.log(res);
}

export {
    createUserFolder,
    createNewProject,
    createNewFile,
    updateFile,
    renameFile,
    deleteFile
}