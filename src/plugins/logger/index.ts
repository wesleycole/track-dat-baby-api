import * as Hapi from 'hapi';
import { Plugin } from '../index';

const register = async (server: Hapi.Server): Promise<void> => {
	try {
		return server.register({
			plugin: require('good'),
			options: {
				ops: {
					interval: 1000
				},
				reporters: {
					consoleReporter: [
						{
							module: 'good-squeeze',
							name: 'Squeeze',
							args: [{ error: '*', log: '*', response: '*', request: '*' }]
						},
						{
							module: 'good-console'
						},
						'stdout'
					]
				}
			}
		});
	} catch (err) {
		console.error(`Error registering logger plugin: ${err}`);
		throw err;
	}
}

export default (): Plugin => ({
	register,
	info: () => ({
		name: 'Good Logger',
		version: '1.0.0'
	})
});
