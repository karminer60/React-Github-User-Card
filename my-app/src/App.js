import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';



class App extends React.Component {
  componentDidMount() {
    axios.get('https://api.github.com/users/karminer60').then(res => {
      // res.data.message
      this.setState({
        card: res.data
      });
    });
  }

  constructor() {
    super();
    // initialize state object
    this.state = {
      thingsToDo: thingsToDo,
      anotherStateProperty: "hello web31!",
      item: "",
    };
  }

}
 
export default App;
