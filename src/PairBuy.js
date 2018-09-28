import React, { Component } from 'react';
import './PairBuy.css';

class PairBuy extends Component {
  render() {
    const { buy, pair } = this.props;

    return (
      <div className="PairBuy">
        <header className="PairBuyTitle">Buy {pair.slice(0,4)}</header>
        <div className="PairBuyAmount">
          <div className="PairBuyAmountPart1">{buy.slice(0,4)}</div>
          <div className="PairBuyAmountPart2">{buy.slice(4,6)}</div>
          <div className="PairBuyAmountPart3">{buy.slice(6,7)}</div>
        </div>
      </div>
    );
  }
}

export { PairBuy };
