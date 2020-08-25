import React from 'react';

import Hero from '../components/Hero';
import HomeCarousel from '../components/HomeCarousel';

function HomePage(props) {
    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
        <HomeCarousel/>
        </div>
    );
}

export default HomePage;