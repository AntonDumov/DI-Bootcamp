import knex from 'knex';
import config from '../knexfile.js'; // Adjust the path as necessary

const db = knex(config);

export default db;
