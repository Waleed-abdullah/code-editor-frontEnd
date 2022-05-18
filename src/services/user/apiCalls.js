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
    return resUser.data
}

const getUsers = async (query) => {
    const url = baseURL + 'getUsers?query=' + query
    const res = await axios.get(url)
    return res.data.usersFound
}

const getUser = async (id) => {
    const url = baseURL + 'getUser?id=' + id
    const res = await axios.get(url)
    return res.data.userFound
}

export {
    createUser,
    updateUserProjectsList,
    getUsers,
    getUser,
}