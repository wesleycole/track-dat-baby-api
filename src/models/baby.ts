import * as Mongoose from 'mongoose';

export interface Baby extends Mongoose.Document {
	userId: number;
	name: string;
	gender: string;
	dateOfBirth: Date;
	createdAt: Date;
	updatedAt: Date;
}

export const BabySchema = new Mongoose.Schema({
	userId: {
		type: Number,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		enum: ['Boy', 'Girl']
	},
	dateOfBirth: {
		type: Date
	}
}, {
	timestamps: true
});

export const BabyModel = Mongoose.model<Baby>('Baby', BabySchema);