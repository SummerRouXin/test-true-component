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
    const { getFieldDecorator, getFieldError } = this.props.form
    return (
      <div>
        <div>
          <label>
            姓:
            {getFieldDecorator('lastname', {
              onChange: this.onLastNameChange
            })(
              <Select style={{ width: 120 }}>
                <Option value="zhao">zhao</Option>
                <Option value="qian">qian</Option>
                <Option value="sun">sun</Option>
                <Option value="li">li</Option>
              </Select>
            )}
          </label>
          <label>
            名:
            {getFieldDecorator('firstname', {
              rules: [
                { required: true, message: '这个是组件内部错误：名字不能为空' }
              ],
              onChange: this.onFirstNameChange
            })(<Input style={{ width: 120 }} />)}
          </label>
          <div style={{ color: 'red' }}>
            {this.props.errors || getFieldError('firstname')}
          </div>
        </div>
      </div>
    )
  }
}

export default createForm()(NameInput)
