import db from '../config/knexconnect.js';

const _getWorkouts = (user_id) => {
    const workouts_id = db('user_workouts').select({ user_id }, ['workout_id'])
    return db('workouts')
        .whereIn('id', workouts_id);
}

const _addWorkout = (user_id, title, description) => {
    const new_workout = db('workouts')
        .insert({ title, description }, ['id', 'title', 'description'])[0];
    db('user_workout').insert({ user_id, workout_id: new_workout.id })
    return new_workout
}

const _deleteWorkout = (user_id, id) => {
    ...
}