import * as database from '../db';

it('should set up the server', async () => {
	expect.assertions(1);
	const results = await database.init();
	expect(results).toBeDefined();
});
