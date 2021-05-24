import React from 'react';

export default function Feature(props) {
	const {
		feature: { title, summary, tools, image, link },
		classModifier = '',
		callToAction = '',
	} = props;

	return (
		<section className={`feature ${classModifier}`}>
			<figure
				className='feature__figure'
				onClick={() => window.open(link, '_blank')}
			>
				<img src={image} alt={title} />
			</figure>
			<h4 className='feature__cta'>{callToAction}</h4>
			<h3 className='feature__title'>{title}</h3>
			<aside className='feature__summary'>
				<p>{summary}</p>
			</aside>
			<ul className='project-tools'>
				{tools.map((tool, index) => (
					<li key={index}>{tool}</li>
				))}
			</ul>
		</section>
	);
}
