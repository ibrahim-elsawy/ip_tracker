import apiHandler from "./apiHandler";
import ipDataRepo from "@/models/ipDataRepo";

export default async (ipAddress: string, isPrivate: boolean) => { 
	try {
		const clientData = isPrivate ? await apiHandler('check') : await apiHandler(ipAddress);
		await ipDataRepo.createIPData(clientData)
		return clientData;
	} catch (error) {
		console.log(error);
	}
};