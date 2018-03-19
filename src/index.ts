import * as Server from './server';
import * as Database from './db';

console.log(`Running environment ${process.env.NODE_ENV || 'dev'}`);

process.on('uncaughtException', (error: Error) => {
  console.error(`uncaughtException ${error.message}`);
});

process.on('unhandledRejection', (reason: any) => {
  console.error(`unhandledRejection ${reason}`);
});

const start = async db => {
  try {
    const server = await Server.init(db);
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  } catch (err) {
    console.error(`Error starting server: ${err.message}`);
    throw err;
  }
};

const database = Database.init();

start(database);
