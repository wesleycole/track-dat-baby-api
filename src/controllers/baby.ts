import * as Hapi from 'hapi';
import * as Boom from 'boom';
import { Baby, BabyModel } from '../models/baby';

export default class BabyController {
	public async getAllBabies(request: Hapi.Request, h: Hapi.ResponseToolkit) {
		return 'Getting babies';
	}

	public async getBabyById(request: Hapi.Request, h: Hapi.ResponseToolkit) {
		return 'Getting baby by ID';
	}

	public async createBaby(request: Hapi.Request, h: Hapi.ResponseToolkit) {
		try {
			const baby: Baby = await BabyModel.create(<Baby>request.payload);
			return h.response(baby).code(201);
		} catch (err) {
			return Boom.badImplementation(err);
		}
	}

	public async updateBaby(request: Hapi.Request, h: Hapi.ResponseToolkit) {
		const id = request.params['id'];
		return 'Update baby';
	}

	public async deleteBaby(request: Hapi.Request, h: Hapi.ResponseToolkit) {
		const id = request.params['id'];
		return 'Delete baby';
	}
}