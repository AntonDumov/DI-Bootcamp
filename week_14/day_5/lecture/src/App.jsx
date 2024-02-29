import './App.css';
import User from './components/User.jsx';
import { useState } from 'react';

/// hooks - useState

function App() {
    const [username, setUsername] = useState('no username')

    return (
        <>
            <div>
                <input onChange={event => {
                    setUsername(event.target.value)
                }}/>
            </div>
            <User
                username={username}
                num={1}
                yesNo={true}
                posts={[1, 2, 3, 'a', 'b', 'c']}
                handleClick={() => alert('Hello')}
            ></User>
        </>
    );
}

export default App;
