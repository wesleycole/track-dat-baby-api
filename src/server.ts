import * as Hapi from 'hapi';
import { Database } from './db';
import { serverConfig } from './config';
import { Plugin } from './plugins';
import routes from './routes';

export async function init(db: Database): Promise<Hapi.Server> {
	try {
		const port = serverConfig.port;
		const server = new Hapi.Server({
			port: port,
			routes: {
				cors: { origin: ['*'] }
			}
		});

		const plugins: Array<string> = serverConfig.plugins;
		const pluginOptions = {
			database: db,
			serverConfig: serverConfig
		};

		let pluginPromises: Promise<any>[] = [];

		plugins.forEach((name: string) => {
			const plugin: Plugin = require(`./plugins/${name}`).default();
			console.log(`Register Plugin ${plugin.info().name}. Version: ${plugin.info().version}`);
			pluginPromises.push(plugin.register(server, pluginOptions))
		});

		await Promise.all(pluginPromises);
		console.log('All Plugins registered');

		routes(server);

		return server;
	} catch (err) {
		console.error(`Error starting server: ${err}`);
		throw err;
	}
}