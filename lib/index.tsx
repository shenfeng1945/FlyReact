import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './icon/icon'

const fn: React.MouseEventHandler<SVGElement> = (e) => {
  console.log(e.target);
}
ReactDOM.render(
    <Icon name="alipay" className="qq" onClick={fn}></Icon>,
    document.getElementById('root')
)