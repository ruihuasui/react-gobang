import React from 'react';
import './gobangPage.css';
import GobangGame from './game.js';
import { Col, Jumbotron } from 'react-bootstrap';

function MobilePage() {
  return (
    <Jumbotron className="mobilePage_" fluid>
      <h3>Dear Mobile User,<br/></h3>
      <p>Please play <strong>Gobang</strong> on a Computer or Laptop.</p>
      <a className="simple2048Link" href="https://ruihuasui.github.io/react-simple2048/">
        Try <strong>Simple 2048</strong> Here
      </a>
    </Jumbotron>
  );
}

export default function GobangPage() {
  const onMobile = window.innerWidth <= 520 ? true : false;
  return (onMobile) ?(
    <MobilePage />
  ) : (
    <Col>
      <GobangGame />
    </Col>
  ); 
}