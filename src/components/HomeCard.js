import React from 'react';

import HomeCardInfo from '../components/HomeCardInfo';

function HomeCard(props) {

    return (
        <div className="d-inline-block t-hcard" onClick={(e) =>props.click(props.item)}>
            <img className="t-hcard-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <HomeCardInfo title={props.item.title} link={props.item.link} /> } 
        </div>
    );
}

export default HomeCard;