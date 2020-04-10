import React from 'react';
import './App.css';
import Players from './components/Players';
import Header from './components/Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }
  componentDidMount() {
    fetch('http://localhost:5000/api/players')
    .then(response => response.json())
    .then(playerData => {
      console.log('player data', playerData);
      this.setState({players: playerData});
    });
  }
  render() {
    return (
      <div className='App'>
        <Header />
        {this.state.players.map((player) => <Players key={player.id} {...player} />)}
      </div>
    );
  }
}

export default App;
