import * as React from 'react';
import './scroll.scss';

interface Props extends React.HTMLAttributes<HTMLElement>{

}

const Scroll: React.FunctionComponent<Props> = (props) => {
    const {children, ...rest} = props;
    return (
        <div className="f-scroll" {...rest}>
            <div className="f-scroll-inner">
                {children}
            </div>
        </div>
    )
};

export default Scroll;