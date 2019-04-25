import React from 'react'

interface Props {
    code: string;
}
const DemoContainer: React.FunctionComponent<Props> = (props) => {
    return (
        <div>
           {props.children}
           <pre>
             {props.code}
           </pre>
        </div>
    )
}
export default DemoContainer;