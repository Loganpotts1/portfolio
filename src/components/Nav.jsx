import React from 'react';

export default function Nav(props) {
    const { links } = props;

    return (
        <nav className="nav">
            <ul className="nav__links">
                {
                    links.map(link => (
                        <li className="nav__link"><a href={link.url.length > 0 ? link.url : "#"}>{link.title}</a></li>
                    ))
                }
            </ul>
        </nav>
    );
}