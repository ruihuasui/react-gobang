import React from 'react';
import './App.css';
import GobangGame from './game-gobang/game.js';
import { Col } from 'react-bootstrap';

function App() {
  return (
    <Col>
      <GobangGame />
    </Col>
  );
}

export default App;
