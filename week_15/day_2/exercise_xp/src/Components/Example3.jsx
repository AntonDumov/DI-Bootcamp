import React from 'react';
import data from '../data.json';

class Example3 extends React.Component {
    render() {
        return (
            <div>
                {data.Experiences.map((experience, index) => (
                    <div key={index}>
                        <img src={experience.logo} alt="Logo"/>
                        <h2><a href={experience.url}>{experience.companyName}</a></h2>
                        {experience.roles.map((role, i) => (
                            <p key={i}>
                                <b>{role.title}</b> <br/> {role.startDate} to {role.endDate} {role.location} <br/>{role.description}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default Example3;