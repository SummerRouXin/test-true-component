import React, { Component } from 'react';
import MyInput from './Input/index';
import { Form } from 'antd';
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      myInputObj: {
        firstName: '',
        lastName: ''
      },
    };
  }

  changeMyInput(value) {
    console.log('-----', value);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <MyInput
          onChangeMyInput={this.changeMyInput}
          myInputObj={this.state.myInputObj}
        />
        <div className="submit">Submit</div>
      </div>
    );
  }
}

export default App;
