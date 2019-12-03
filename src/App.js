import React, { Component } from 'react';
import './App.css';
//import Messages from './Messages';
//import TheDate from './state/TheDate'
//import Counter from './state/Counter'
//import HelloWorld from './state-drills/HelloWorld'
//import Bomb from './state-drills/Bomb'
//import RouletteGun from './state-drills/RouletteGun'
//import Tabs from './state/Tabs'
import Accordion from './state-drills/Accordion'

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion sections={sections}/>
      </div>
    );
  }
}

export default App;
