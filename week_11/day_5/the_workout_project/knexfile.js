// Update with your config settings.

/**
 * @type { Object.<string, import('knex').Knex.Config> }
 */
export default {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'workout',
      user:     'postgres',
      password: 'postgres'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
