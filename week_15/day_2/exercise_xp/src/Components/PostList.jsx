import posts from '../posts.json'; // adjust the path to your json file

const PostList = () => {
    return (
        <div>
            {posts.map((post, index) => (
                <div key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;