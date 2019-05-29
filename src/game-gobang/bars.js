import React from 'react';
import './bars.css'
import { Col, Button, Card, ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { InputNameForm } from './wrapper.js'

export function PlayerBar(props) {
  const player1 = props.firstPlayer ? '⚪️' : '⚫️';
  const player2 = props.firstPlayer ? '⚫️' : '⚪️';
  const p1Active = props.firstPlayer ? 
                    (props.isBlack ? "" : "-active"):
                    (props.isBlack ? "-active" : "");
  const p2Active = (p1Active === "-active") ? "" : "-active";
  const firstPlayer = props.firstPlayer ? props.player2 : props.player1;
  return (
    (props.nameEntered) ? 
      (<Col className="bottonContainer-left" lg="auto">
        <Card className="normalCards">
          <Card.Header>
            PLAYERS
            <TipButton 
              key_="right" value="Click to decide who go first!"
              onClick={()=>props.switchPlayer()}
              name="Switch Player"
              variant="switch"
            />
          </Card.Header>

          <Card.Text >
            <strong>{firstPlayer}</strong> go first
          </Card.Text>
 
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
  const modeText = 'Sorry the Computer vs. User mode is in-progress.';
  const newGameText = <p>Click to <strong>Start a new Game!</strong><br/>(please set the players before starting).</p>;
  const goBackText = <p>Click to go back 1 step</p>;
  return (
    (props.nameEntered) ? 
      (<Col className="bottonContainer-right" md="auto">
        <TipButton 
          key_="left" value={modeText}
          onClick={()=>1}
          name={'Mode'}
          class_="normalButtons" variant="flat" size="xxl"
        />
        <TipButton 
          key_="left" value={newGameText}
          onClick={()=>props.newGame()}
          name={'New Game'}
          class_="normalButtons" variant="flat" size="xxl"
        />
        <TipButton 
          key_="left" value={goBackText}
          onClick={()=>props.goBack()}
          name={<p>Go Back<br/>One Step</p>}
          class_="normalButtons" variant="flat" size="xxl"
        />
      </Col>) :
      (<div></div>)
  );
}

export function TipButton(props) {
  return (
    <OverlayTrigger
      key={props.key_}
      placement={props.key_}
      overlay={
        <Tooltip id={`tooltip-${props.key_}`}>
          {props.value}
        </Tooltip>
      }
    >
      <Button className={props.class_} variant={props.variant} size={props.size}
        onClick={props.onClick}
      >
        {props.name}
      </Button>
    </OverlayTrigger>
  );
}

