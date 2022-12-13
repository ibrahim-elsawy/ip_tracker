import { ipdata } from "./dbContext";

export interface ClientData { 
	ip: string,
	country_name: string,
	city: string,
	latitude: Number,
	longitude: Number
};

export default {
	createIPData: async (clientData: ClientData) => { 
		await ipdata.create(clientData)
	},
};