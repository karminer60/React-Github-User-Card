import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Display from './DisplayComponent.js'


class App extends React.Component {
  componentDidMount() {
    axios.get('https://api.github.com/users/karminer60')
    .then(res => {
      // res.data.message
      console.log(res.data)
      this.setState({
        userData: res.data 
      });
    });
  }

  state = {
    cards: [],
    cardsText: "karminer60"
  };

  handleChanges = e => {
    this.setState({
      cardsText: e.target.value
    });
  };

  fetchCard = () => {
    
   
    axios.get(`https://api.github.com/users/karminer60/followers`).then(res => {
      // res.data.message
      this.setState({
        cards: res.data
      });
    });
  };

 

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <input
          type="text"
          value={this.state.cardsText}
          onChange={this.handleChanges}
        />
       
        <button onClick={this.fetchCard}>Fetch Card</button>
        <div className="cards">
          {this.state.cards.followers.map(follower => (
            <img width="200" src={follower} key={follower} alt={follower} />
          ))}
        </div>
        
      </div>
    );
  }
}


 
export default App;
