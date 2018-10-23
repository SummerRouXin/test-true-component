import React, { Component } from 'react'
import { Form, Input, Select } from 'antd'

const createForm = Form.create
const { Option } = Select

class NameInput extends Component {
  firstname: null
  lastname: null
  onFirstNameChange = (e) => {
    const firstname = e.target.value
    console.log('firstname:', firstname)
    this.firstname = firstname
    this.onValueChange()
  }

  onLastNameChange = (lastname) => {
    console.log('lastname', lastname)
    this.lastname = lastname
    this.onValueChange()
  }

  onValueChange = () => {
    this.props.onChange &&
      this.props.onChange({
        firstname: this.firstname,
        lastname: this.lastname
      })
  }

  render() {
    return (
      <div>
        <div>
          <label>
            <Select style={{ width: 120 }} onChange={this.onLastNameChange}>
              <Option value="zhao">zhao</Option>
              <Option value="qian">qian</Option>
              <Option value="sun">sun</Option>
              <Option value="li">li</Option>
            </Select>
          </label>
          <label>
            名:
            <Input style={{ width: 120 }} onChange={this.onFirstNameChange} />
          </label>
          <div style={{ color: 'red' }}>{this.props.errors}</div>
        </div>
      </div>
    )
  }
}

export default createForm()(NameInput)
