import * as server from '../server';

it('should set up the server', async () => {
	expect.assertions(1);
	const results = await server.init({});
	expect(results).toBeDefined();
});
