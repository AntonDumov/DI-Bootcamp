import React from 'react';
import data from '../data.json';

class Example1 extends React.Component {
    render() {
        return (
            <div>
                {data.SocialMedias.map((link, index) => (
                    <div key={index}><a href={link}>{link}</a></div>
                ))}
            </div>
        );
    }
}

export default Example1;