import React from 'react';
import scopeClass from "../utils/scopeClass";

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
}
const sc = scopeClass('f-layout');

const Footer: React.FunctionComponent<FooterProps> = (props) => {
    const {className, ...rest} = props;
    return (
        <div className={sc('footer',{extra: className})} {...rest}>{props.children}</div>
    )
};

export default Footer;