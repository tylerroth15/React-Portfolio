import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style= useSpring({opacity: 1, from:{opacity: 0}});

    return(
        <animated.div className="t-card-info" style={style}>
            <p className="t-card-title">{props.title}</p>
            <p className="t-card-sub-title">{props.subTitle}</p>
            <a href={props.gitHubLink} target="_blank" rel="noopener noreferrer">GitHub Repo Link</a>
            <a href={props.deployedLink} target="_blank">Application Link</a>
        </animated.div>
    );
}

export default CardInfo;