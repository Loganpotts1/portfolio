import React from 'react';
//Local Imports
import Background from './Background';
import Nav from '../components/Nav';
import Card from '../components/Card';
import Projects from '../utils/Projects';
import Feature from '../components/Feature';
import { links } from '../data/links';
import { skills } from '../data/skills';
import { projects } from '../data/projects';
import logo from '../media/LP_Logo.gif';

export default function Portfolio() {
	return (
		<main className='main'>
			<Background />
			{/* <div className='delete-me'></div> */}
			<div className='main__content'>
				<h1 className='main__watermark'>
					SOFT<sub>-</sub>
					<br />
					WARE
				</h1>
				<aside className='main__job-title'>
					<p>
						Self-taught Software Engineer
						<br />
						with background in design
					</p>
				</aside>
				<h1 className='main__hero'>
					Hello<span className='text-accent'>;</span>
					<br />
					I'm Logan
				</h1>
				<div className='main__summary'>
					<div className='main__summary-text'>
						<h2>
							GreaterFortWayne<span className='text-accent'>( )</span>
						</h2>
						<p>
							I am a full-stack software engineer based in Fort Wayne, Indiana.
							Among my work I have built websites, mobile applications, and
							back-end services. My passion is problem solving and lord of the
							rings 🤓.
						</p>
					</div>
					<aside>
						<Card title={'Skills'} items={skills} />
					</aside>
				</div>
				<div className='main__projects'>
					<header>
						<h2>
							FeaturedWorks<span className='text-accent'>( )</span>
						</h2>
					</header>
					<div className='main__features'>
						{/* <Projects> */}
						{projects.map((project, index) => (
							<Feature
								key={index}
								feature={project}
								classModifier={
									index % 2 === 0
										? 'main__features--right'
										: 'main__features--left'
								}
								callToAction='View Project'
							/>
						))}
						{/* </Projects> */}
					</div>
				</div>
				<h2 className='main__contact-me'>
					I'm always excited about the next project!
					<br /> <a href='mailto:pottld01@gmail.com'>Let's get in touch</a>.
				</h2>
			</div>
			<a href='#top' className='logo'>
				<img src={logo} alt='logo' />
			</a>
			<Nav links={links} />
			{/*Sprites*/}
			{/*Logo*/}
			{/*Navigation*/}
			{/*Hero*/}
			{/*Projects*/}
			{/*Contact Me*/}
		</main>
	);
}
