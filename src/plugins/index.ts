import * as Hapi from 'hapi';
import { Database } from '../db';
import { serverConfig } from '../config';

export interface PluginOptions {
	database: Database;
	serverConfig;
}

export interface PluginInfo {
	name: string;
	version: string;
}

export interface Plugin {
	register(server: Hapi.Server, options?: PluginOptions): Promise<void>;
	info(): PluginInfo;
}