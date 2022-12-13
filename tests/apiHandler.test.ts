import axios from 'axios';
import apiHandler from '../src/services/apiHandler';
import { ClientData } from '../src/models/ipDataRepo';

jest.mock('axios');

describe('apiHandler service Test', () => {
	it('should call ipstack api and get ip data', async () => {
		const ipData: ClientData = {
			ip: '192.47.333.284',
			country_name: 'Egypt',
			city: 'Cairo',
			latitude: 30.33,
			longitude: 50.333 
		};
		const res = { data: ipData };
		(axios.get as jest.Mock).mockResolvedValue(res);

		const resApiHandler = await apiHandler('any ip address as argument');
		expect(resApiHandler).toEqual(ipData);
		expect(1 + 2).toBe(3);
	});
});
