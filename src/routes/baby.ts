import * as Hapi from 'hapi';
import * as Boom from 'boom';
import { Baby, BabyModel } from '../models/baby';
import BabyController from '../controllers/baby';

export default function(server: Hapi.Server) {
	const babyController = new BabyController();
	server.route({
    method: 'GET',
    path: '/baby',
    handler: babyController.getAllBabies
	});

	server.route({
		method: 'GET',
		path: '/baby/{id}',
		handler: babyController.getBabyById
	});

	server.route({
		method: 'POST',
		path: '/baby',
		handler: babyController.createBaby
	});

	server.route({
		method: 'PUT',
		path: '/baby/{id}',
		handler: babyController.updateBaby
	});

	server.route({
		method: 'DELETE',
		path: '/baby/{id}',
		handler: babyController.deleteBaby
	})
}