import React from 'react';
import './App.css';
import GobangGame from './game-gobang/game.js';
import {MobilePage} from './game-gobang/wrapper.js'
import { Col } from 'react-bootstrap';

function App() {
  const onMobile = window.innerWidth <= 520 ? true : false;
  return (onMobile) ?(
    <MobilePage />
  ) : (
    <Col>
      <GobangGame />
    </Col>
  );
}

export default App;
