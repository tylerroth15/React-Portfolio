import React from 'react';
import { Container, Row } from 'react-bootstrap';
// import Carousel from 'react-bootstrap/Carousel';
import Card from '../components/Card';

import weatherdash from '../assets/images/weatherdash.PNG';
import workschedule from '../assets/images/workschedule.PNG';
import project1 from '../assets/images/project1.PNG';
import note1 from '../assets/images/note1.PNG';
import burgerapp from '../assets/images/burgerapp.PNG';
import workoutmobile from '../assets/images/workoutmobile.PNG';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            items: [
                {
                    id: 0,
                    title: 'Weather Dashboard', 
                    subTitle: 'Mobile Friendly Weather App',
                    imgSrc: weatherdash,
                    gitHubLink: 'https://github.com/tylerroth15/Weather-Dashboard',
                    deployedLink: 'https://tylerroth15.github.io/Weather-Dashboard/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Work Day Schedule', 
                    subTitle: 'How to stay on task and on time',
                    imgSrc: workschedule,
                    gitHubLink: 'https://github.com/tylerroth15/Daily-Work-Schedule',
                    deployedLink: 'https://tylerroth15.github.io/Daily-Work-Schedule/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'SCF Arcade', 
                    subTitle: 'Take a break and play a game with us',
                    imgSrc: project1,
                    gitHubLink: 'https://github.com/tylerroth15/Salty-Cloud-Frogs-Project-1',
                    deployedLink: 'https://tylerroth15.github.io/Salty-Cloud-Frogs-Project-1/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Note Taker', 
                    subTitle: 'Never miss an important idea or task again',
                    imgSrc: note1,
                    gitHubLink: 'https://github.com/tylerroth15/note-taker',
                    deployedLink: 'https://tylers-note-taker.herokuapp.com/',
                    selected: false
                }, 
                {
                    id: 4,
                    title: 'Hamburger Builder', 
                    subTitle: 'Lettuce Make You the Perfect Hamburger',
                    imgSrc: burgerapp,
                    gitHubLink: 'https://github.com/tylerroth15/Node-Express-Handlebars',
                    deployedLink: 'https://hamburger-builder-node-express.herokuapp.com/burgers',
                    selected: false
                }, 
                {
                    id: 5,
                    title: 'Workout Tracker', 
                    subTitle: 'Never miss a PR with our fitness tracker',
                    imgSrc: workoutmobile,
                    gitHubLink: 'https://github.com/tylerroth15/Workout-Tracker',
                    deployedLink: 'https://tylerroth15.github.io/Weather-Dashboard/',
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
            return <Card item={item} click={(e=> this.handleCardClick(item.id, e))} key={item.id} />
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

export default Carousel;