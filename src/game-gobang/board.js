import React from 'react';
import { Col, Row, } from 'react-bootstrap';
import {GameOver} from './wrapper.js'
import {createMatrx} from './matrix.js'
import './board.css';


function Box(props) {
  const className_ = "box" + props.type;
  // alert(className_);
  const matrix = props.matrix;
  const x_ = props.position.x, y_ = props.position.y;
  const content = matrix[x_][y_] ? matrix[x_][y_] : '';
  const active_ = props.active[x_][y_] ? props.active[x_][y_] : '';
  return (
    <Col 
      className={className_} 
      onClick={() => {props.updateMatrix(x_, y_);}}
    >
      <div className="piece">
        {content}
      </div>
      <div className="piece-active">
        {active_}
      </div> 
    </Col>
  );
}

function BoardRow(props) {
  const row = parseInt(props.row);
  var center = (row === 2 || row === 7 || row === 12) ? "-center" : "";
  return (
    <Row className="board-row">
      {[{y:  0, type: "-left" + props.type},
        {y:  1, type: props.type},
        {y:  2, type: center + props.type},
        {y:  3, type: props.type},
        {y:  4, type: props.type},
        {y:  5, type: props.type},
        {y:  6, type: props.type},
        {y:  7, type: center + props.type},
        {y:  8, type: props.type},
        {y:  9, type: props.type},
        {y: 10, type: props.type},
        {y: 11, type: props.type},
        {y: 12, type: center + props.type},
        {y: 13, type: props.type},
        {y: 14, type: "-right" + props.type},
      ].map(placement => (
        <Box 
          matrix={props.matrix} 
          active={props.active}
          position={{x: row, y: placement.y}} 
          updateMatrix={props.updateMatrix} 
          type={placement.type}/>
      ))}
    </Row>
  );
}

export default class GobangBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Col className="board" md="auto">
          <GameOver
            gameOver={this.props.gameOver}
            winner={this.props.winner}
          />
          {[{type: "-top", row: "0"}, 
            {type: "", row:  "1"},
            {type: "", row:  "2"},
            {type: "", row:  "3"},
            {type: "", row:  "4"},
            {type: "", row:  "5"},
            {type: "", row:  "6"},
            {type: "", row:  "7"},
            {type: "", row:  "8"},
            {type: "", row:  "9"},
            {type: "", row: "10"},
            {type: "", row: "11"},
            {type: "", row: "12"},
            {type: "", row: "13"},
            {type: "-bottom", row: "14"},
          ].map(placement => (
            <BoardRow 
              matrix={this.props.matrix} 
              active={this.props.active}
              updateMatrix={this.props.updateMatrix} 
              type={placement.type} row={placement.row}
            />
          ))}
        </Col>
    );
  }
}
