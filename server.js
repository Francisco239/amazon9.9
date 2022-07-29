import http from 'http';
import api from './api/api.js';
import database from './api/config/database.js';

const port = proses.env.PORT || 3001;

const server = http.createServer(api);

database();
server.listen(port);
