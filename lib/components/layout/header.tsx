import React from 'react';
import scopeClass from "../utils/scopeClass";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
}

const sc = scopeClass('f-layout');

const Header: React.FunctionComponent<HeaderProps> = (props) => {
    const {className,...rest} = props;
    return (
        <div className={sc('header',{extra: className})} {...rest}>{props.children}</div>
    )
};

export default Header;