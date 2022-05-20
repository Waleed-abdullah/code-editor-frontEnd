import axios from "../../axios";

const baseURL = '/code/'

const runCode = async (code, language, stdin) => {
    // const url = baseURL + 'run?code=' + code + '&language=' + language + '&stdin=' + stdin;
    const url = baseURL + 'run'
    const res = await axios.post(url, {code, language, stdin})
    console.log(res)
    return res.data
}

export {
    runCode,
}