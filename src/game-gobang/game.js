import React, {Component} from 'react';
import { Row } from 'react-bootstrap';
import GobangBoard from './board.js'
import {BottonBar, PlayerBar} from './bars.js'
import {createMatrx, copyMatrix, checkWin} from './matrix.js'
import './game.css'

export default class GobangGame extends Component {
  constructor(props) {
    super(props);
    this.state={
      matrix      : createMatrx(15, 15, 0),
      isBlack     : true,
      firstPlayer : 0,
      history     : [
        {
          matrix: createMatrx(15, 15, 0),
        }
      ],
      currStep : 0,
      player1  : 'Player 1',
      player2  : 'Player 2',
      nameEntered : false,
      seconds  : 60
    }
    this.gameOver = false;
    this.winner = '';

    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);

    this._startGame = this._startGame.bind(this);
    this._resetNames = this._resetNames.bind(this);
    this._setPlayer1Name = this._setPlayer1Name.bind(this);
    this._setPlayer2Name = this._setPlayer2Name.bind(this);
    this._updateMatrix = this._updateMatrix.bind(this);
    this._switchPlayer = this._switchPlayer.bind(this);
    this._newGame = this._newGame.bind(this);
    this._goBack = this._goBack.bind(this);
  }

  startTimer() {
    this.setState({seconds: 60});
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    if (seconds === -1) return;
    this.setState({
      seconds: seconds,
    });
  }
  
  _startGame() {
    this.setState({nameEntered: true});
    this.startTimer();
  }

  _setPlayer1Name(event) {
    this.setState({player1: event.target.value});
  }

  _setPlayer2Name(event) {
    this.setState({player2: event.target.value});
  }

  _updateMatrix(x, y) {
    const matrix_ = copyMatrix(15, 15, this.state.matrix);
    const index = this.state.currStep + 1;
    const history_ = this.state.history.slice(0, index);
    const isBlack_ = this.state.isBlack;
    if (matrix_[x][y]) return;
    matrix_[x][y] = isBlack_ ? '⚫️' : '⚪️';

    this.setState({
      matrix  : matrix_,
      isBlack : !isBlack_,
      history : history_.concat([
        {
          matrix: matrix_
        }
      ]),
      currStep : index,
    });
    this.startTimer();
  }

  _switchPlayer() {
    const new1stPlayer = this.state.firstPlayer ? 0 : 1;
    this.setState({
      firstPlayer : new1stPlayer,
    });
    this.startTimer();
  }

  _newGame() {
    this.setState({
      matrix  : createMatrx(15, 15, 0),
      isBlack : true,
      history : [
        {
          matrix: createMatrx(15, 15, 0),
        }
      ],
      currStep : 0,
    });
    this.gameOver = false;
    this.winner = '';
    this.startTimer();
  }

  _resetNames() {
    this.setState({
      nameEntered : false,
    });
    this.startTimer();
  }

  _goBack() {
    const index = this.state.currStep - 1;
    if (index <= 0) return;
    const isBlack_ = !this.state.isBlack;
    const history_ = this.state.history.slice(0, index);
    const matrix_ = copyMatrix(15, 15, history_[index-1].matrix);
    this.setState({
      currStep : index,
      history  : history_,
      matrix   : matrix_,
      isBlack  : isBlack_,
    });
    this.startTimer();
  }

  render() {
    const result = checkWin(this.state.matrix);
    if (result.win) {
      this.gameOver = true;
      const firstPlayer = this.state.firstPlayer ? this.state.player2 : this.state.player1;
      const secondPlayer = this.state.firstPlayer ? this.state.player1 : this.state.player2;
      this.winner = this.state.currStep % 2 === 1 ? firstPlayer : secondPlayer;
    }

    return (
      <Row className="gameContainer" >
        <PlayerBar 
          switchPlayer={this._switchPlayer}
          firstPlayer={this.state.firstPlayer}
          isBlack={this.state.isBlack}
          player1={this.state.player1}
          player2={this.state.player2}
          nameEntered={this.state.nameEntered}
          setPlayer1Name={this._setPlayer1Name}
          setPlayer2Name={this._setPlayer2Name}
          submitNames={this._startGame}
          resetNames={this._resetNames}
        />
        <GobangBoard 
          matrix={this.state.matrix} 
          updateMatrix={this._updateMatrix}
          gameOver={this.gameOver}
          winner={this.winner}
        />
        <BottonBar 
          nameEntered={this.state.nameEntered}
          newGame={this._newGame}
          goBack={this._goBack}
          seconds={this.state.seconds}
        />
      </Row>
    );
  }
}