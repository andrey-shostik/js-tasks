import React, { Component } from 'react';
import './board.scss';

class Board extends Component {
  render() {
    const y = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const x = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    const columnList = y.map(function (y) {
      return <li key={y}>{y}</li>;
    });

    const rowList = x.map(function (x) {
      return <li key={x}>{x}</li>;
    });

    const rows = x.map(function (x) {
      const tds = y.map(function (y) {
        return <td key={y} data-pos={x + y} />;
      });
      return <tr key={x}>{tds}</tr>;
    });

    return (
      <div className="board-container">

        <ul className="row-list">
          {rowList}
        </ul>


        <div className="flex-container">
          <ul id="column-list">
            {columnList}
          </ul>

          <table className="board">
            {rows}
          </table>
        </div>
      </div>
    );
  }
}

export default Board;
