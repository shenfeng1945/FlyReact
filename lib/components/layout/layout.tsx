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
    let hasAside = false;
    if((props.children as Array<ReactElement>).length){
        (props.children as Array<ReactElement>).map(node => {
            if(node.type === Aside){
                hasAside = true
            }
        })
    }
    return (
        <div className={sc('', {extra: [className, hasAside && 'hasAside'].join(' ')})} {...rest}>
            {props.children}
        </div>
    )
};

export default Layout;