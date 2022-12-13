import axios from 'axios';
import config from '../config';

axios.defaults.baseURL = config.ipstack.base_url;

export default async (ipAddress: string) => { 
	try {
		const res = await axios.get(ipAddress, { params: { access_key: config.ipstack.access_key } });
		return res.data;
	} catch (error) {
		console.log(error);
	}
};