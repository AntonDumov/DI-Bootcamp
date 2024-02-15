import db from '../config/pgconnect.js';

export const _getAllPosts = () => {
    return db('posts').select('id', 'title', 'content').orderBy('title');
};

export const _getPostByID = (id) => {
    return db('posts').select('id', 'title', 'content').where('id', id) || null;
};

export const _createPost = (title, content) => {
    return db('posts').insert({ title, content }, ['id', 'title', 'content']);
};

export const _updatePostByID = (id, data) => {
    return db('posts').update({...data}, ['id', 'title', 'content']).where('id', id);
};

export const _deletePostByID = (id) => {
    return db('posts').delete(['id', 'title', 'content']).where('id', id);
}