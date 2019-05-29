import React from 'react';
import './bars.css'
import { Col, Button, Card, ListGroup, Form } from 'react-bootstrap';
import {InputNameForm} from './wrapper.js'

var playerMap = ['⚫️','⚪️'];

export function PlayerBar(props) {
  const player1 = props.firstPlayer ? '⚪️' : '⚫️';
  const player2 = props.firstPlayer ? '⚫️' : '⚪️';
  const p1Active = props.firstPlayer ? 
                    (props.isBlack ? "" : "-active"):
                    (props.isBlack ? "-active" : "");
  const p2Active = (p1Active === "-active") ? "" : "-active";
  return (
    (props.nameEntered) ? 
      (<Col className="bottonContainer-left" lg="auto">
        <Card className="normalCards">

          <Card.Header>
            PLAYERS
            <Button variant="switch" onClick={()=>props.switchPlayer()}>
              Switch Player
            </Button>
          </Card.Header>

          <ListGroup variant="flush">
            <ListGroup.Item className={"listItems"+p1Active}>
              {props.player1}<br/> {player1}
            </ListGroup.Item>
            <ListGroup.Item className={"listItems"+p2Active}>
              {props.player2}<br/> {player2}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    ) : 
    (
    <Col className="bottonContainer-left" lg="auto">
      <InputNameForm 
        setPlayer1Name={props.setPlayer1Name}
        setPlayer2Name={props.setPlayer2Name}
        submitNames={props.submitNames}
      />
    </Col>)
  );
}

export function BottonBar(props) {
  return (
    (props.nameEntered) ? 
      (<Col className="bottonContainer-right" md="auto">
        <Button className="normalButtons" variant="flat" size="xxl">
          Mode
        </Button>
        <Button 
          className="normalButtons" variant="flat" size="xxl"
          onClick={()=>props.newGame()}
        >
          New Game
        </Button>
        <Button className="normalButtons" variant="flat" size="xxl"
          onClick={()=>props.goBack()}
        >
          Go Back<br/>One Step
        </Button>
      </Col>) :
      (<div></div>)
  );
}

