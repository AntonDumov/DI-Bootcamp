import { _createPost, _deletePostByID, _getAllPosts, _updatePostByID, _getPostByID } from '../models/posts.models.js';

export const getAllPosts = async (req, res) => {
    res.json(await _getAllPosts());
};
