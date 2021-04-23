import React from 'react';

export default function SkillsCard(props) {
    const { skills } = props;

    return (
        <section className="card">
            <h2 className="card__heading">Skills</h2>
            <ul className="card__skills">
                {
                    skills.map(skill => (
                        <li className="card__skill">{skill}</li>
                    ))
                }
            </ul>
        </section>
    );
}