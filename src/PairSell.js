import React, { Component } from 'react';
import './PairSell.css';

class PairSell extends Component {
  render() {
    const { sell, pair } = this.props;

    return (
      <div className="PairSell">
        <header className="PairSellTitle">Sell {pair.slice(0, 4)}</header>
        <div className="PairSellAmount">
          <div className="PairSellAmountPart1">{sell.slice(0, 4)}</div>
          <div className="PairSellAmountPart2">{sell.slice(4, 6)}</div>
          <div className="PairSellAmountPart3">{sell.slice(6, 7)}</div>
        </div>
      </div>
    );
  }
}

export { PairSell };
