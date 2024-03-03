import { useState } from 'react';
import './App.css'

function App() {
    const [languages, setLanguages] = useState([
        { name: 'Php', votes: 0 },
        { name: 'Python', votes: 0 },
        { name: 'JavaSript', votes: 0 },
        { name: 'Java', votes: 0 }
    ]);
    return (
        <div>
            {languages.map((l, i) => {
                return (
                    <div className="language">
                        <div className="votes">{l.votes}</div>
                        <div className="name">{l.name}</div>
                        <div className="action">
                            <button onClick={() => {
                                const newLanguages = [ ...languages ];
                                newLanguages[i].votes++;
                                setLanguages(newLanguages);
                            }}>Click Here</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
