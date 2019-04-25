import React from 'react';
import scopeClass from "../utils/scopeClass";

interface AsideProps extends React.HTMLAttributes<HTMLElement> {
}
const sc = scopeClass('f-layout');
const Aside: React.FunctionComponent<AsideProps> = (props) => {
    const {className, ...rest} = props;
    return (
        <div className={sc('aside',{extra: className})} {...rest}>{props.children}</div>
    )
};

export default Aside;