/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('exercises', (table) => {
            table.increments('id').primary();
            table.string('name', 255).notNullable();
            table.text('description');
            table.string('muscle_group', 255);
            table.datetime('created_at').defaultTo(knex.fn.now());
            table.datetime('updated_at').defaultTo(knex.fn.now());
        })
        .createTable('workouts', table => {
            table.increments('id').primary();
            table.string('title', 255).notNullable();
            table.text('description');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable('users', table => {
            table.increments('id').primary();
            table.string('username', 255).notNullable().unique();
            table.string('email', 255).notNullable().unique();
            table.string('password', 255).notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable('user_workouts', table => {
            table.integer('user_id').unsigned().references('id').inTable('users');
            table.integer('workout_id').unsigned().references('id').inTable('workouts');
        })
        .createTable('workout_exercises', table => {
            table.integer('workout_id').unsigned().references('id').inTable('workouts');
            table.integer('exercise_id').unsigned().references('id').inTable('exercises')
        });
};

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTable('workout_exercises')
        .dropTable('user_workouts')
        .dropTable('users')
        .dropTable('workouts')
        .dropTable('exercises')
};
