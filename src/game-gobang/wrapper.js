import React, {Component} from 'react';
import { Jumbotron, Form, Button, Image } from 'react-bootstrap';
import './wrapper.css';

export function GameOver(props) {
  return (
    (props.gameOver) ? 
    (<div className="gameOverWrapper">
      <Jumbotron className="textArea">
        <h1>The Winner is<br/><strong>{props.winner}</strong>!</h1>
        <p>
          - Please Start A New Game to Continue - 
        </p>
      </Jumbotron>
    </div>) :
    (<div></div>)
  );
}

export function InputNameForm(props) {
  return (
    <Form>
      <Form.Text >
        <h1 className="icon">Gobang</h1>
      </Form.Text>
      <Form.Text className="text-muted">
          You can replace the default names with your prefered names!
      </Form.Text>
      <Form.Group >
        <Form.Label>Player 1</Form.Label>
        <Form.Control 
          placeholder="Enter the name of player1" 
          defaultValue="Player 1"
          onChange={props.setPlayer1Name}
        />
      </Form.Group>
    
      <Form.Group >
        <Form.Label>Player 2</Form.Label>
        <Form.Control 
          placeholder="Enter the name of player2" 
          defaultValue="Player 2"
          onChange={props.setPlayer2Name}
        />
      </Form.Group>
      <Button className="normalButtons" variant="flat" onClick={props.submitNames}>
        Set Names and Begin!
      </Button>
    </Form>
  )
}