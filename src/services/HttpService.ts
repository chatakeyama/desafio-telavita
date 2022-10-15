import axios from "axios"
import config from '../config.json'
import { IHttpResponse } from "../interfaces/IHttpResponse.interface"

const apiEndpoint = config.apiUrl

const getDataFromServer = async (apiUrl: string | undefined): Promise<IHttpResponse> => {
    const promise = axios.get(apiUrl || `${apiEndpoint}?page[limit]=4&page[offset]=0`)
    const { data } = await promise
    return data
}

export default getDataFromServer
