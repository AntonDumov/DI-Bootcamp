import React from 'react';
import data from '../data.json';

class Example2 extends React.Component {
    render() {
        return (
            <div>
                {data.Skills.map((skill, index) => (
                    <div key={index}>
                        <h2>{skill.Area}</h2>
                        <ul>{skill.SkillSet.map((set, i) => (
                            <li key={i}>{set.Name} {set.Hot ? '🔥' : ''}</li>
                        ))}</ul>
                    </div>
                ))}
            </div>
        );
    }
}

export default Example2;