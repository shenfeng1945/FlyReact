import React from 'react';
import '../iconfonts/importAllIcons'
import './icon.scss'
import classnames from '../utils/classnames'

interface IconProps extends React.SVGAttributes<SVGElement> {
    name?: string;
}
const Icon: React.FunctionComponent<IconProps> = ({ className, name, ...restProps }) => {
    return (
        <svg className={classnames('f-icon', className)} {...restProps}>
            <use xlinkHref={`#${name}`}></use>
        </svg>
    )
}
export default Icon