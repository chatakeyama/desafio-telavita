import axios from "axios"
import config from '../config.json'
import { IHttpResponse } from "../interfaces/IHttpResponse.interface"

const apiEndpoint = config.apiUrl

const getDataFromServer = async (apiUrl: string | undefined, itemsPerPage: number): Promise<IHttpResponse> => {
    const promise = axios.get(apiUrl || `${apiEndpoint}?page[limit]=${itemsPerPage}&page[offset]=0`)
    const { data } = await promise
    return data
}

export default getDataFromServer
