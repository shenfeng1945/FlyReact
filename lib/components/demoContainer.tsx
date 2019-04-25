import React, {useState} from 'react'
import Highlight, {defaultProps} from "prism-react-renderer";
import Button from "./button/button";

interface Props {
    code: string;
}

const DemoContainer: React.FunctionComponent<Props> = (props) => {
    const [codeVisiable, setCodeVisiable] = useState(false);
    const code = (
        <Highlight {...defaultProps} code={props.code} language="jsx">
            {({className, style, tokens, getLineProps, getTokenProps}) => (
                <pre className={className} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({line, key: i})}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({token, key})} />
                                ))}
                            </div>
                        ))}
                    </pre>
            )}
        </Highlight>
    );
    return (
        <div>
            <div>
                {props.children}
            </div>
            <Button onClick={() => setCodeVisiable(!codeVisiable)}>查看源码</Button>
            {codeVisiable && code}
        </div>
    )
};
export default DemoContainer;