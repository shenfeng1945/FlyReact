import React from 'react';
import './icons/importAllIcons'
import './icon.scss'

interface IconProps {
    name?: string;
    onClick?: React.MouseEventHandler<SVGElement>
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className="f-icon" onClick={props.onClick}>
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
}
export default Icon