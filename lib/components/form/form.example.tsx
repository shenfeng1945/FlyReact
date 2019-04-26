import React, { useState, Fragment } from 'react'
import Form from './form';

const FormExample: React.FunctionComponent = () => {
    const [formData,setFormData] = useState({
        username: 'hello',
        password: ''
    });
    const [fields] = useState([
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}},
    ]);
    const onSubmit = () => {
       console.log(formData)
    }
    const onChange = () => {

    }
    return (
      <Form value={formData} fields={fields}
        buttons={
            <Fragment>
                <button type="submit">提交</button>
                <button>返回</button>
            </Fragment>
        }
        onSubmit={onSubmit}
        onChange={onChange}
      ></Form>
    )
}
export default FormExample;