const UserFavoriteAnimals = (props) => {
    return (
        <ul>
            {props.favAnimals.map(animal => <li>{animal}</li>)}
        </ul>
    )
}

export default UserFavoriteAnimals