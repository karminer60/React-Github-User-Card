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

    axios.get(`https://api.github.com/users/karminer60/followers`).then(res => {
      // res.data.message
      this.setState({
        followers: res.data
      });
    });
  }

  state = {
    userData: null,
    cardsText: "karminer60",
    followers : []
  };

 

 

 

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
       
      
        <div className = 'user'>
        {this.state.userData && <Display userData={this.state.userData} key={this.state.userData.login} />}
        </div>
        <div className="followers">
          {this.state.followers.map(follower => (
            <Display userData={follower} key={follower.login}   />
          ))}
        </div>
        
      </div>
    );
  }
}


 
export default App;
