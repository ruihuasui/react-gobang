import React from 'react';
import { Jumbotron, Form } from 'react-bootstrap';
import { TipButton } from './bars.js';
import './wrapper.css';

const halfWidth_ = Math.floor(window.innerWidth / 2) + 'px';
const width_ = Math.floor(window.innerWidth) + 'px';

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
    <Form className="inputNameForm" style={{width: width_}}>
      <Form.Text >
        <h1 className="icon">Gobang</h1>
        <h4 className="githubLink">You can view the source code{' '} 
          <a href="https://github.com/ruihuasui/react-gobang">here</a>
        </h4>
      </Form.Text>
      <Form.Text className="text-muted">
          You can replace the default names with your prefered names!
      </Form.Text>
      <Form.Group style={{width: halfWidth_}}>
        <Form.Label>Player 1</Form.Label>
        <Form.Control 
          placeholder="Enter the name of player1" 
          defaultValue={props.player1}
          onChange={props.setPlayer1Name}
        />
      </Form.Group>
      <Form.Group style={{width: halfWidth_}}>
        <Form.Label>Player 2</Form.Label>
        <Form.Control 
          placeholder="Enter the name of player2" 
          defaultValue={props.player2}
          onChange={props.setPlayer2Name}
        />
      </Form.Group>
      <TipButton 
        key_="bottom" value={submitTips}
        onClick={()=>props.submitNames()}
        name="Submit Names"
        class_="normalButtons" variant="flat" 
      />
    </Form>
  )
}

