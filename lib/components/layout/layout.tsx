import React, {ReactElement} from 'react';
import scopeClass from "../utils/scopeClass";
import './layout.scss'
import Aside from "./aside";

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}

const sc = scopeClass('f-layout');
const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    const {className, ...rest} = props;
    const children = props.children as Array<ReactElement>;
    // 也可以用some
    const hasAside = 'length' in children &&
        children.reduce((result, node) => result || node.type === Aside, false);
    return (
        <div className={sc({'': true, hasAside}, {extra: className})} {...rest}>
            {props.children}
        </div>
    )
};

export default Layout;
export {Layout};
export {default as Header} from './header';
export {default as Content} from './content';
export {default as Aside} from './aside';
export {default as Footer} from './footer';
