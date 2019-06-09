import React, { useState, Fragment } from 'react'
import Form, {FormValue} from './form';
import Validator from "./validator";

const checkUsername = (username: string, success: () => void, fail: () => void) => {
    const existName = ['allen','hello-world'];
    setTimeout(() => {
        if(existName.indexOf(username) >= 0){
            success()
        }else{
            console.log('hello');
            fail()
        }
    }, 2000)
};

const FormExample: React.FunctionComponent = () => {
    const [formData,setFormData] = useState<FormValue>({
        username: 'allen',
        password: ''
    });
    const [fields] = useState([
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}},
    ]);
    const rules = [
        {key: 'username', required: true},
        {key: 'username', minLength: 8, maxLength: 16},
        {key: 'username', pattern: /^[a-zA-Z0-9]+$/},
        {key: 'username', validator: {
            name: 'unique',
            validate: (username: string) => {
                return new Promise((resolve,reject) => {
                    checkUsername(username, resolve, reject);
                })
            }
            }},
        {key: 'password', required: true},
    ];
    const [errors,setError] = useState({});
    const onSubmit = () => {
        const errors = Validator(formData,rules);
        setError(errors);
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
        errors={errors}
      />
    )
};
export default FormExample;