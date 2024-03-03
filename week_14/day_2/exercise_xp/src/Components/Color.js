import { useEffect, useState } from 'react';

const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState('red')

    useEffect(() => {
        alert('useEffect reached')
        setFavoriteColor('yellow')
    }, []);

    return <div>
        <h2>My favorite color is <i>{favoriteColor}</i></h2>
        <button onClick={() => setFavoriteColor('blue')}>Change to blue</button>
    </div>
}

export default Color