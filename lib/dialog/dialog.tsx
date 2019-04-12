import * as React from 'react';

interface DialogProps {
    visiable: boolean;
}

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
    return (
        props.visiable ?
            <div>{props.children}</div> :
            null
    )
}

export default Dialog;