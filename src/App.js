import React, { Component } from 'react';
import './App.css';
import ReactEventSource from 'react-eventsource';
import { Pair } from './Pair.js';
import { getPriceTrend } from './PriceTrend';
import { Loader } from './Icons';

const displayedPairs = [
  'USD CHF',
  'GBP USD',
  'GBP CHF',
  'EUR SEK',
  'USD JPY',
  'EUR JPY'
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactEventSource url="http://localhost:8080/events">
          {events => {
            const pairComponents = displayedPairs.map((pair, index) => {
              if (events && events.length > 0) {
                const receivedEvent = events
                  .slice()
                  .reverse()
                  .map(JSON.parse)
                  .find(event => event.pair === pair);

                const raising = getPriceTrend(receivedEvent, pair);

                return this.renderEvent(pair, receivedEvent, raising);
              } else {
                return (
                  <div className="LoaderContainer">
                    <Loader key={index} />
                  </div>
                );
              }
            });
            return <div className="PairContainer">{pairComponents}</div>;
          }}
        </ReactEventSource>
      </div>
    );
  }

  renderEvent = (pair, event, raising) => {
    return <Pair event={event} pair={pair} key={pair} raising={raising} />;
  };
}

export default App;
