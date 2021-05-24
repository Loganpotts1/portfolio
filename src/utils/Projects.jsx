import React from 'react';

export default function Projects(props) {
    const { children } = props;

    return children.map((child, index) => {
        const classes = child.props.className;
        let addedClass;
        if (index % 2 !== 0) {
            addedClass = "feature--left";
        } else {
            addedClass = "feature--right";
        }

        return child.props.className = `${classes} ${addedClass}`;

        // return React.cloneElement(child, { className: child.props.className + " " + addedClass });
    });
}