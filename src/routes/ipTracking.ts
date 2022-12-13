import getClientData from '@/services/clientData';
import { Router, Request, Response } from 'express';
import IP from 'ip';

export default () => {

	const route = Router();
	
	route.get('/', async (req: Request, res: Response) => {
		const ip = IP.address();
		console.log(`Is Private IP address ----> ${IP.isPrivate(ip)}`);
		const clientData = await getClientData(ip, IP.isPrivate(ip));
		return res.json(clientData);
	});

	return route;
};
