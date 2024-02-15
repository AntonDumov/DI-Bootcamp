import knex from 'knex';

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'postgres'
    }
});

export default db;