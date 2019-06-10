import React, { useState, Fragment } from 'react'
import Form, {FormValue} from './form';
import Validator from "./validator";

const checkUsername = (username: string, success: () => void, fail: () => void) => {
    const existName = ['allen','helloworld'];
    setTimeout(() => {
        if(existName.indexOf(username) >= 0){
            fail()
        }else{
            success()
        }
    }, 2000)
};

const FormExample: React.FunctionComponent = () => {
    const [formData,setFormData] = useState<FormValue>({
        username: 'hellworld',
        password: ''
    });
    const [fields] = useState([
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}},
    ]);
    const validate = (username: string) => new Promise((resolve,reject) => checkUsername(username, resolve, reject));
    const rules = [
        {key: 'username', required: true},
        {key: 'username', minLength: 8, maxLength: 16},
        {key: 'username', pattern: /^[a-zA-Z0-9]+$/},
        {key: 'username', validate},
        {key: 'password', required: true},
        {key: 'password', validate},
    ];
    const [errors,setError] = useState({});
    const onSubmit = () => {
        Validator(formData,rules).then(res => {
            setError(res);
        });
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