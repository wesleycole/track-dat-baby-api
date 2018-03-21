import * as Hapi from 'hapi';
import babyRoutes from './baby';

export default function(server: Hapi.Server) {
	babyRoutes(server);
}