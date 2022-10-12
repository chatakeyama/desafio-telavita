import axios from "axios"
import config from '../config.json'

const apiEndpoint = config.apiUrl

const getAllCharacters = async (): Promise<any> => {
    const promise = axios.get(`${apiEndpoint}/characters`)
    const { data } = await promise
    return data
}

export default getAllCharacters
