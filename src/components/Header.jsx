import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div className="header">
        <h3>{this.props.title}</h3>
        <p
          onClick={
            e =>
              this.setState({ count: this.state.count + 1 })
          }
        >
          {this.state.count}
        </p>
      </div>
    )
  }
}