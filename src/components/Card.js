import React from 'react';

import CardInfo from '../components/CardInfo';

function Card(props) {

    return (
        <div className="d-inline-block t-card" onClick={(e) =>props.click(props.item)}>
            <img className="t-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} gitHubLink={props.item.gitHubLink} deployedLink={props.item.deployedLink} /> } 
        </div>
    );
}

export default Card;