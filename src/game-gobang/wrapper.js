import React from 'react';
import { Jumbotron, Form, Button } from 'react-bootstrap';
import { TipButton } from './bars.js'
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
  const submitTips = <p>Click to submit the names and <strong>Begin the Game!</strong></p>;
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
      <TipButton 
        key_="bottom" value={submitTips}
        onClick={()=>props.submitNames()}
        name="Set Names and Begin!"
        class_="normalButtons" variant="flat" 
      />
    </Form>
  )
}

export function MobilePage() {
  return (
    <Jumbotron className="mobilePage_" fluid>
      <h3>
        Dear Mobile User,<br/>
      </h3>
      <p>
        Please play <strong>Gobang</strong> on a Computer or Laptop.
      </p>
      <a href="https://ruihuasui.github.io/react-simple2048/">
        Try <strong>Simple 2048</strong> Here
      </a>
    </Jumbotron>
  );
} 