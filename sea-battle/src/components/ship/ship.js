import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ship.scss';

class Ship extends Component {

  render() {
    const squares = [];

    for (let i = 0; i < this.props.size; i += 1) {
      squares.push(<td key={i} />);
    }

    return (
      <table className="ship" border="1px">
        <tr>
          { squares }
        </tr>
      </table>
    );
  }
}

Ship.propTypes = {
  size: React.PropTypes.number,
  quantity: React.PropTypes.number
};

Ship.defaultProps = {
  size: 0,
  quantity: 0
};

export default Ship;
