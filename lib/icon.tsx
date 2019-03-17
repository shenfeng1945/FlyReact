import React from 'react';
import './icons/importAllIcons'
import './icon.scss'

interface IconProps {
    name?: string;
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className="f-icon">
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
}
export default Icon