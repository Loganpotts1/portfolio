import React from 'react';

export default function SkillsCard(props) {
	const { title, items } = props;

	return (
		<section className='card'>
			<h3 className='card__heading'>{title}</h3>
			<ul className='card__items'>
				{items.map((item, index) => (
					<li key={index}>
						<span>{item}</span>
					</li>
				))}
			</ul>
		</section>
	);
}
