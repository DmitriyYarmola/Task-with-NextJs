import axios, { AxiosInstance } from 'axios'

export const createInstance = (): AxiosInstance => {
	return axios.create({ baseURL: 'https://simple-blog-api.crew.red/' })
}
