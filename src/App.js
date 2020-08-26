import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage'
class App extends React.Component {

constructor(props) {
  super(props);
    this.state= {
      title: 'Tyler Roth',
      headerLinks: [
        {title: 'Home', path: '/React-Portfolio/'},
        {title: 'Portfolio', path: '/React-Portfolio/portfolio'},
        {title: 'About', path: '/React-Portfolio/about'},
        {title: 'Contact', path: '/React-Portfolio/contact'}
      ],
      home: {
        title: 'Dream Bigger', 
        subTitle: 'New to the game, but here to stay',
        text:'Checkout my progress'
      },
      portfolio: {
        title: 'Portfolio', 
      },
      about: {
        title: 'About Me', 
      },
      contact: {
        title: 'Let\'s Connect', 
      }
    }
  }


  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className= "border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Tyler Roth</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to ="/React-Portfolio/">Home </Link>
                <Link className="nav-link" to ="/React-Portfolio/portfolio">Portfolio </Link>
                <Link className="nav-link" to ="/React-Portfolio/about">About</Link>
                <Link className="nav-link" to ="/React-Portfolio/contact">Contact</Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/React-Portfolio/" exact render={()=> <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/React-Portfolio/portfolio" exact render={()=> <PortfolioPage title={this.state.portfolio.title} />} />
          <Route path="/React-Portfolio/about" exact render={()=> <AboutPage title={this.state.about.title}/>} />
          <Route path="/React-Portfolio/contact" exact render={()=> <ContactPage title={this.state.contact.title}/>} />

          <Footer/>
        </Container>
      </Router>
      );
  }
 
}

export default App;
