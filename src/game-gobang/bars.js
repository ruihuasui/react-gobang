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
  const displayPlayer = (props.nameEntered) ? 'flex' : 'none';
  const displaySetNames = (props.nameEntered) ? 'none' : 'flex';
  return (
    <div>
      <Col className="bottonContainer-left" lg="auto" style={{display: displayPlayer}}>
        <Card className="normalCards">
          <Card.Header>
            PLAYERS
            <TipButton 
              key_="right" value="Click to decide who go first!"
              onClick={()=>props.switchPlayer()}
              name="Switch Player"
              variant="switch"
            />
            <TipButton 
              key_="right" value="Click to change the names!"
              onClick={()=>props.resetNames()}
              name="Reset Names"
              variant="switch"
            />
          </Card.Header>
        </Card>

        <Card className="normalCards">
          <Card.Text >
            <br/><strong>{firstPlayer}</strong> go first
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
      {/* Input name bar */}
      <Col className="bottonContainer-left" lg="auto" style={{display: displaySetNames}}>
        <InputNameForm 
          setPlayer1Name={props.setPlayer1Name}
          setPlayer2Name={props.setPlayer2Name}
          player1={props.player1}
          player2={props.player2}
          submitNames={props.submitNames}
        />
      </Col>

    </div>
  );
}

export function BottonBar(props) {
  const timerText = <p> Click <strong>New Game</strong> Botton below to countdown</p>
  const modeText = 'Sorry the Computer vs. User mode is in-progress.';
  const newGameText = <p>Click to <strong>Start a new Game!</strong><br/>(please set the players before starting).</p>;
  const goBackText = 'Click to go back one step';
  var color_ = props.seconds ? 'black' : 'red';
  return (
    (props.nameEntered) ? (
      <Col className="bottonContainer-right" md="auto">
        <TipButton 
          key_="left" value={timerText}
          onClick={()=>1}
          name={<p style={{color: color_}}>Time Remain<br/><h2>{props.seconds}s</h2></p>}
          class_="normalButtons" variant="white" size="xxl"
        />
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
          name={'Go Back'}
          class_="normalButtons" variant="flat" size="xxl"
        />
      </Col>
      ) : (
        <div></div>
      )
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

