import React from 'react'

export default class Button extends React.Component<any, any>{
    state = {
        name: 'hello'
    }
    render() {
      return (
          <div>{this.state.name}</div>
      )
    }
}