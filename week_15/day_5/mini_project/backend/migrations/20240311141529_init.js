/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('todos', function (table) {
            table.increments('id').primary();
            table.string('text').notNullable();
            table.boolean('completed').defaultTo(false);
        });
};

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTable('todos')
};
