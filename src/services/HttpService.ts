import axios from "axios"
import config from '../config.json'

const apiEndpoint = config.apiUrl

const getCharactersFromServer = async (apiUrl: string | undefined): Promise<any> => {
    const promise = axios.get(apiUrl || `${apiEndpoint}?page[limit]=4&page[offset]=0`)
    const { data } = await promise
    return data
}

export default getCharactersFromServer
