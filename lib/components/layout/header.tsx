import React from 'react';
import scopeClass from "../utils/scopeClass";

const sc = scopeClass('f-layout');

const Header: React.FunctionComponent = (props) => {
    return (
        <div className={sc('header')}>{props.children}</div>
    )
};

export default Header;