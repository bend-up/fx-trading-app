import React, { Component } from 'react';
import './Pair.css';
import { PairBuy } from './PairBuy';
import { PairSell } from './PairSell';

class Pair extends Component {
  render() {
    const { event, pair } = this.props;

    const buy = event && event.buy ? event.buy.toString().slice(0, 8) : '-';
    const sell = event && event.sell ? event.sell.toString().slice(0, 8) : '-';
    return (
      <div className="Pair">
        <header className="PairTitle">{pair}</header>
        <div className="PairContent">
          <PairSell pair={pair} sell={sell} />
          <PairBuy pair={pair} buy={buy} />
        </div>
      </div>
    );
  }
}

export { Pair };
