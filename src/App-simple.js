import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Form, Button } from 'antd'
// import NameInput from './Input/index2'
import NameInput from './Input/index-simple'

class App extends Component {
  submit() {
    this.props.form.validateFields((err, value) => {
      if (err) {
        return;
      }
      console.log('----', value)
    });
  }

  render() {
    const { getFieldDecorator, getFieldError } = this.props.form
    return (
      <div className="App">
        {getFieldDecorator('name', {
          rules: [
            {
              type: 'object',
              required: true,
              fields: {
                firstname: {
                  // required: true,
                  // message: '名字不能为空'
                  max: 5,
                  message: 'firstName不能>5',
                },
                lastname: {
                  validator(rule, value, cb) {
                    if (value === 'zhao') {
                      cb(new Error('不能姓赵，谢谢'))
                    } else {
                      cb()
                    }
                  }
                }
              }
            }
          ]
        })(<NameInput />)}
        <div>E: {getFieldError('name')}</div>
        <div className="submit" onClick={this.submit.bind(this)}>Submit</div>
      </div>
    )
  }
}

export default Form.create()(App)
