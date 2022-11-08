import axios from "axios"
import {BASE_URL, TIMEOUT} from "./config";

class DDRequest {
	constructor(baseURL, timeout) {
		this.instance = axios.create({
			baseURL,
			timeout
		})
		this.instance.interceptors.response.use((res) => {
			return res.data
		}, (error) => error)
	}

	request(config) {
		return this.instance.request(config)
	}

	get(config) {
		return this.request({...config, method: "get"})
	}

	post(config) {
		return this.request({...config, method: "post"})
	}

	delete(config) {
		return this.request({...config, method: "delete"})
	}
}

export default new DDRequest(BASE_URL, TIMEOUT)
