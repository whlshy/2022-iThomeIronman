import React, { Component } from 'react'

export default class FocusExample extends Component {
  constructor(props) {
    super(props)
    this.inputEl = React.createRef()
  }

  render() {
    return (
      <div>
        <input type={"text"} ref={this.inputEl}></input>
        <button onClick={e => this.inputEl.current.focus()}>點擊</button>
      </div>
    )
  }
}
