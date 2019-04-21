import React from 'react';
import scopeClass from "../utils/scopeClass";

const sc = scopeClass('f-layout');
const Aside: React.FunctionComponent = (props) => {
    return (
        <div className={sc('aside')}>{props.children}</div>
    )
};

export default Aside;