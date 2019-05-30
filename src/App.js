import React from 'react';
import './App.css';
import GobangPage from './game-gobang/gobangPage.js'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Route, BrowserRouter as Router } from 'react-router-dom'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">Gobang</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/gobang">Gobang</Nav.Link>
              <Nav.Link href="https://ruihuasui.github.io/react-simple2048/">Simple 2048</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
          
          <Route exact path="/" component={GobangPage} />
          <Route exact path="/gobang" component={GobangPage} />
          {/* <Route path="/users" component={Simple2048Page} /> */}
        </div>
      </Router>
    );
  }
}