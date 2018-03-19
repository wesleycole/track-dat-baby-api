import * as Hapi from 'hapi';
import { Plugin } from '../index';

const register = async (server: Hapi.Server): Promise<void> => {
	try {
		return server.register([
			require('inert'),
			require('vision'),
			{
				plugin: require('hapi-swagger'),
				options: {
					info: {
						title: 'Track Dat Baby API',
						description: 'REST API Documentation for Track Dat Baby.',
						version: '1.0'
					},
					tags: [
						{
							name: 'user',
							description: 'API User Routes'
						}
					],
					swaggerUI: true,
					documentationPage: true
				}
			}
		]);
	} catch (err) {
		console.error(`Error registering Swagger plugin: ${err}`);
	}
};

export default (): Plugin => ({
	register,
	info: () => ({
		name: 'Swagger Documentation',
		version: '1.0.0'
	})
});
