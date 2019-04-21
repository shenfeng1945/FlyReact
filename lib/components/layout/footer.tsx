import React from 'react';
import scopeClass from "../utils/scopeClass";

const sc = scopeClass('f-layout');

const Footer: React.FunctionComponent = (props) => {
    return (
        <div className={sc('footer')}>{props.children}</div>
    )
};

export default Footer;