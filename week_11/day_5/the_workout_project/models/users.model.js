import db from '../config/knexconnect.js'

const _register = (username, email, password) => {
    return db('users')
        .insert({username, email, password}, ['id', 'username'])
}

const _login = (email, password) => {
    return db('users')
        .select('id', 'username')
        .where('email', email)
        .where('password', password) || null;
}