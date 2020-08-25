import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    return(
       <div>
           <Hero title={props.title}/>
           
           <Content>
           
            <p>My name is Tyler Roth. I was born and raised in Indianapolis, Indiana with my two sisters. I lived in Indiana until summer of 2007 when I joined the Air Force and went to school at the Air Force Academy in Colorado Springs. While at the Academy, I played D1 volleyball as well as, club softball and lacrosse. I graduated from the Academy in May of 2011 with a Bachelor's of Science with a concentration in Engineering and English. Unfortunately, I ended up having 10 knee surgeries on my right knee over the course of 5 years and was medically discharged just shy of two months prior to pilot training.</p>

            <p> After leaving the Air Force, I started my engineering career in the Aerospace Engineering Industry. I began this career with Rolls Royce and was able to transfer to Savannah when my husband was based here with the 1/75th Army Ranger Battalion at Hunter Army Air Field. </p>
           
            <p>In Janurary 2019, my husband and I started our own Digital Marketing company. This is where I discovered my love for programming. I started teaching myself basic HTML and CSS and quickly realized this was my passion and wanted to fully pursue this new career. </p>
           
            <p> I now work for a marketing agency as a digital strategist and my main focus is web development. As I continue to grow at work and through the Coding Bootcamp, I am finding out that I have never been more excited about work in my life. </p>
           </Content>


       </div>
    );
}

export default AboutPage;