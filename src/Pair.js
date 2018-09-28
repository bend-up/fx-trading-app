import React, { Component } from 'react';
import './Pair.css';
import { PairBuy } from './PairBuy';
import { PairSell } from './PairSell';
import { ArrowUp, ArrowDown, Empty } from './Icons';
import { priceTrend } from './PriceTrend';

class Pair extends Component {
  render() {
    const { event, pair, raising } = this.props;

    const buy = event && event.buy ? event.buy.toString().slice(0, 8) : '-';
    const sell = event && event.sell ? event.sell.toString().slice(0, 8) : '-';
    return (
      <div className="Pair">
        <header className="PairTitle">{pair}</header>
        <div className="PairContent">
          <PairSell pair={pair} sell={sell} />
          {this.renderArrow(raising)}
          <PairBuy pair={pair} buy={buy} />
        </div>
      </div>
    );
  }
  renderArrow(raising) {
    if (raising === priceTrend.raising) {
      return <ArrowUp />;
    } else if (raising === priceTrend.falling) {
      return <ArrowDown />;
    } else {
      return <Empty />;
    }
  }
}

export { Pair };
