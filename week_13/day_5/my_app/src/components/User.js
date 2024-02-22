const User = props => {
    return (<div style={{ borderColor: 'white', borderStyle: 'solid', borderWidth: '2px' }}>
        <h2>Name: {props.name}</h2>
        <h2>Email: {props.email}</h2>
    </div>);
}

export default User