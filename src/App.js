import React from 'react';
import './App.css';
import GobangPage from './game-gobang/gobangPage.js'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Route, BrowserRouter as Router } from 'react-router-dom'

export default function App (){
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark" className="bar">
          <Navbar.Brand href="https://ruihuasui.github.io/react-forms/">
            <img width="30" height="30" src={require('./images/airapp-logo.png')}/>
            {' '}AirApps
          </Navbar.Brand>
          
          <Nav className="mr-auto">
            <Nav.Link href="/react-gobang/">Gobang</Nav.Link>
            <Nav.Link href="https://ruihuasui.github.io/react-simple2048/">Simple 2048</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>

        <Route exact path="/react-gobang/" component={GobangPage} />
      </div>
    </Router>
  );
}