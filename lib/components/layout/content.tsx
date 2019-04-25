import React from 'react';
import scopeClass from "../utils/scopeClass";

interface ContentProps extends React.HTMLAttributes<HTMLElement> {
}
const sc = scopeClass('f-layout');

const Content: React.FunctionComponent<ContentProps> = (props) => {
    const {className, ...rest} = props;
    return (
        <div className={sc('content', {extra: className})} {...rest}>{props.children}</div>
    )
};

export default Content;