import React from 'react';

//import { BlueButton } from './components/views'
import { BlueButton } from './components'


export default class App extends React.Component {
  state = {
    counter: 1
  }

  buttonPressed = () => {
    console.log('this is tooo strange...only comp.');
  };

  render(){
    return BlueButton(this.buttonPressed)('yang')
  }
}
