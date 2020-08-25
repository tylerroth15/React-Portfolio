import React from 'react';
import { Container, Row } from 'react-bootstrap';

import HomeCard from '../components/HomeCard';

import tyheadshot from '../assets/images/tyheadshot.jpg';
import tylaugh from '../assets/images/tylaugh.jpg';
import tycomp from '../assets/images/tycomp.jpg';



class HomeCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            items: [
                {
                    id: 0,
                    title: 'Connect with Me on LinkedIn',
                    link: 'https://www.linkedin.com/in/tyler-roth/',
                    imgSrc: tylaugh,
                    selected: false
                },
                {
                    id: 1,
                    title: 'Check Out My Work', 
                    imgSrc: tycomp,
                    link: 'https://github.com/tylerroth15',
                    selected: false
                },
                {
                    id: 2,
                    title: 'About Me', 
                    imgSrc: tyheadshot,
                    link: '/about',
                    selected: false
                }

            ]
        }

    }

    handleCardClick= (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems= (items) => {
        return items.map(item => {
            return <HomeCard item={item} click={(e=> this.handleCardClick(item.id, e))} key={item.id} />
        })

    }

    render(){
        return(
            <Container fluid={true}>
                <Row className= "justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default HomeCarousel;