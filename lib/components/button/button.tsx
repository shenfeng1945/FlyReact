import React from 'react';
import classnames from '../utils/classnames';
import './button.scss'

interface ButtonProps {
    type?: string;
    onClick?:any
}

const Button: React.FunctionComponent<ButtonProps> = ({type,children,...restProps}) => {
    return (
        <button className={classnames('f-button', type && `${type}`)} {...restProps}>{children}</button>
    )
}

export default Button;