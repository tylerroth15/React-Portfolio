import React from 'react';
import { useSpring, animated } from 'react-spring';

function HomeCardInfo(props) {

    const style= useSpring({opacity: 1, from:{opacity: 0}});

    return(
        <animated.div className="t-hcard-info" style={style}>
            <p className="t-hcard-title">{props.title}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">Link</a>
        </animated.div>
    );
}

export default HomeCardInfo;