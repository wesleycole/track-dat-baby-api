import * as Hapi from 'hapi';
import babyRoute from './baby';

export default function(server: Hapi.Server) {
	babyRoute(server);
}