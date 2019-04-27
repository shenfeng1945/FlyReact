import React, { useState, Fragment } from 'react'
import Form, {FormValue} from './form';
import Validator from "./validator";

const FormExample: React.FunctionComponent = () => {
    const [formData,setFormData] = useState<FormValue>({
        username: '',
        password: ''
    });
    const [fields] = useState([
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}},
    ]);
    const rules = [
        {key: 'username', required: true},
        {key: 'username', minLength: 8},
        {key: 'username', pattern: /^[a-zA-Z0-9]+$/},
        {key: 'username', maxLength: 16},
        {key: 'password', required: true},
    ];
    const onSubmit = () => {
        const errors = Validator(formData,rules);
        console.log(formData);
        console.log('errors');
        console.log(errors);
    };
    const onChange = (e: any) => {
        setFormData(e);
    };
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
      />
    )
};
export default FormExample;