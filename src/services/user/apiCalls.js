import axios from "../../axios";

const baseURL = '/user/'

const createUser = async (user) => {
    console.log(user)
    const url = baseURL + 'createUser'
    const resUser = await axios.post(url, {user})
    return resUser.data
}

export {
    createUser,
}