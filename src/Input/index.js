import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Select } from 'antd';
import './index.css';

const FormItem = Form.Item;
const createForm = Form.create;
const { Option } = Select;

class MyInput extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    myInputObj: PropTypes.object.isRequired,
    onChangeMyInput: PropTypes.func.isRequired,
  };

  handleChangeInput(e) {
    const value = e.target.value;
    const { myInputObj, onChangeMyInput } = this.props;
    onChangeMyInput({
      ...myInputObj,
      lastName: value
    });
  }

  handleChangeSelect(value) {
    const { myInputObj, onChangeMyInput } = this.props;
    onChangeMyInput({
      ...myInputObj,
      firstName: value,
    });
  }

  render() {
    const { getFieldDecorator, getFieldError } = this.props.form;
    return (
      <div className="">
        <div className="firstName">
          First Name:
          {
            getFieldDecorator('firstName', {
              rules: [
                {
                  required: true,
                  message: 'firstName不能为空',
                },
              ],
              initialValue: '',
            })(
              <Select
                style={{ width: 245 }}
                onChange={this.handleChangeSelect.bind(this)}
              >
                <Option value="zhang">Zhang</Option>
                <Option value="wang">Wang</Option>
              </Select>,
            )
          }
        </div>
        <div className="lastName">
          Last Name:
          <div>
            {
              getFieldDecorator('lastName', {
                rules: [
                  {
                    max: 5,
                    message: 'lastName不能>5',
                  },
                ],
              })(
                <Input
                  style={{ width: 245 }}
                  onChange={this.handleChangeInput.bind(this)}
                />,
              )
            }
            <div style={{ color: 'red' }}>
              {(getFieldError('lastName') || []).join(', ')}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const NewMyInput = createForm()(MyInput);
export default NewMyInput;
