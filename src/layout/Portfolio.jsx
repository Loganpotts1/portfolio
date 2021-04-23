import React from 'react';
//Local Imports
import Background from './Background';
import Nav from '../components/Nav';
import SkillsCard from '../components/SkillsCard';
import Project from '../components/Project';
import { links } from '../data/links';
import { skills } from '../data/skills';
import { projects } from '../data/projects';

export default function Portfolio() {
    return (
        <main className='main'>
            <Background/>
            <div className='delete-me'></div>
            <span className="logo">insert logo</span>
            <div className='main__content'>
                <h1 className='watermark'>SOFTWARE<br/>ENGINEER</h1>
                <h1 className='hero'>Hello;<br/>I'm Logan</h1>
                <span className="job-desc">
                    <h2>My Story</h2>
                    <p>I am a self-taught </p>
                </span>
                <Nav links={links} />
                <SkillsCard skills={skills} />
                {
                    projects.map((project, index) => <Project key={index} project={project}/>)
                }
                <h1 className="contact-me">contact me</h1>
            </div>
            {/*Sprites*/}
            {/*Logo*/}
            {/*Navigation*/}
            {/*Hero*/}
            {/*Projects*/}
            {/*Contact Me*/}
        </main>
    );
}