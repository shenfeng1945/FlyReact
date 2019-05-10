import React, { InputHTMLAttributes } from 'react';
import scopeClass from "../utils/scopeClass";
import './input.scss';


interface Props extends InputHTMLAttributes<HTMLInputElement> {

}
const sc = scopeClass('f-input')
const Input: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props;
    return (
        <input className={sc({ '': true }, { extra: className })} {...rest} />
    )
}

export default Input;