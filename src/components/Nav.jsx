import React from 'react';

export default function Nav(props) {
	const { links } = props;

	return (
		<nav className='nav'>
			<ul className='nav__links'>
				{links.map((link, index) => (
					<li key={index}>
						<a href={link.url.length > 0 ? link.url : '#'} target='_blank'>
							{link.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
