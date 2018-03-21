import * as Mongoose from 'mongoose';
import { databaseConfig } from './config';
import { Baby, BabyModel } from './models/baby';

export interface Database {
	babyModel: Mongoose.Model<Baby>;
}

export function init(): Database {
	(<any>Mongoose).Promise = Promise;
	Mongoose.connect(process.env.MONGOURL || databaseConfig.connectionString);

	let db = Mongoose.connection;
	db.on('error', () => {
		console.error(`Unable to connect to database: ${databaseConfig.connectionString}`);
	});

	db.once('open', () => {
		console.log(`Connected to database: ${databaseConfig.connectionString}`);
	});

	return {
		babyModel: BabyModel
	}
}