import React, { Component } from 'react';
import MyInput from './Input/index-simple';
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

  submit() {
    this.props.form.validateFields((err, value) => {
      if (err) {
        return;
      }
      console.log('----', value)
    });
  }

  render() {
    return (
      <div className="App">
        <MyInput
          onChangeMyInput={this.changeMyInput}
          myInputObj={this.state.myInputObj}
        />
        <div className="submit" onClick={this.submit.bind(this)}>Submit</div>
      </div>
    );
  }
}

export default Form.create()(App);
