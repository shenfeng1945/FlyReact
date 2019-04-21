import React from 'react';
import scopeClass from "../utils/scopeClass";

const sc = scopeClass('f-layout');

const Content: React.FunctionComponent = (props) => {
    return (
        <div className={sc('content')}>{props.children}</div>
    )
};

export default Content;