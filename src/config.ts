export const databaseConfig = {
	connectionString: 'mongodb://localhost:27017/trackdatbaby'
};

export const serverConfig = {
	port: process.env.PORT || 3000,
	plugins: ['swagger', 'logger']
};
