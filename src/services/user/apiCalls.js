import axios from "../../axios";

const baseURL = '/user/'

const createUser = async (user) => {
    const url = baseURL + 'createUser'
    const resUser = await axios.post(url, {user})
    return resUser.data
}

const updateUserProjectsList = async (id, projectInfo) => {
    const url = baseURL + 'createProject'
    const resUser = await axios.post(url, {id, projectInfo})
    console.log(resUser)
    return resUser.data
}

export {
    createUser,
    updateUserProjectsList,
}