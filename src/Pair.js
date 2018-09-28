import React, { Component } from 'react';
import './Pair.css';

class Pair extends Component {

  render() {
    const {event, pair} = this.props;

    const buy = event && event.buy ? event.buy.toString().slice(0, 8) : '-';
    const sell = event && event.sell ? event.sell.toString().slice(0, 8) : '-';
    return (
      <div className="Pair">
        <header className="PairTitle">{pair}</header>
        <div className="PairContent">
          <div className="PairBuy">
            buy: {buy}
          </div>
          <div className="PairSell">
            sell: {sell}
          </div>
        </div>
      </div>
    );
  }

}

export { Pair };
