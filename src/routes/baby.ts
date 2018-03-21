import * as Hapi from 'hapi';
import * as Boom from 'boom';
import { Baby, BabyModel } from '../models/baby';

export default function(server: Hapi.Server) {
	server.route({
    method: 'GET',
    path: '/baby',
    handler: function (request: Hapi.Request, h: Hapi.ResponseToolkit) {
			return 'Get babies!';
    }
	});

	server.route({
		method: 'POST',
		path: '/baby',
		handler: async (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
			try {
				const baby: Baby = await BabyModel.create(<Baby>request.payload);
				return h.response(baby).code(201);
			} catch (err) {
				return Boom.badImplementation(err);
			}
		}
	})
}