import React, { Component } from 'react';
import './App.css';
import ReactEventSource from 'react-eventsource';

const displayedPairs = ["USD CHF","GBP USD","GBP CHF","EUR SEK","USD JPY","EUR JPY"];

class App extends Component {

  render() {
    return (
      <div className="App">
      <ReactEventSource url="http://localhost:8080/events">
      { events => {
        const pairComponents = displayedPairs.map( pair => {

          if (events && events.length > 0) {
            const receivedEvent = events.slice()
            .reverse()
            .map(JSON.parse)
            .find( event => event.pair === pair);

            return (this.renderEvent(pair, receivedEvent));
          } else {
            return <div>Loading...</div>
          }
        });
        return <div>{pairComponents}</div>
      }
    }
    </ReactEventSource>
    </div>
  );
}

  renderEvent = (pair, event) => {
    const buy = event ? event.buy : '-';
    const sell = event ? event.sell : '-';
    return (
      <div key={pair}>{pair}: buy: {buy}, sell: {sell}</div>
    );
  }
}

export default App;
