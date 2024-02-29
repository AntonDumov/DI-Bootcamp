import PropTypes from 'prop-types';

const User = props => {
    console.log('props=>', props);
    return (
        <div>
            <h2>Username: {props.username}</h2>
            {props.num}
            {props.yesNo ? "Yes": "No"}
            {
                props.posts.map(item => {
                    return (
                        <>{item}</>
                    )
                })
            }
            <button onClick={props.handleClick}>Say Hello</button>
        </div>
    );
};

User.propTypes  = {
    username: PropTypes.string.isRequired,
    num: PropTypes.number,
    yesNo: PropTypes.bool,
    posts: PropTypes.array,
    handleClick: PropTypes.func
}

export default User;