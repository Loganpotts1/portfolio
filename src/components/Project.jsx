import React from 'react';

export default function Project(props) {
    const {
        project: {
            title,
            summary,
            tools,
            image,
            link
        }
    } = props;
    
    return (
        <section className="feature">
            <figure className="feature__figure" onClick={() => window.open(link, "_blank")}>
                <figcaption>{title}</figcaption>
                <img src={image} alt={title}/>
            </figure>
            <aside className="feature__summary">
                <p>{summary}</p>
                <ul className="project-tools">
                    {
                        tools.map((tool, index) => <li key={index}>{tool}</li>)
                    }
                </ul>
            </aside>
        </section>
    );
}