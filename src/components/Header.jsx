import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown)
  }

  onKeyDown(e){
    console.log('按下了鍵盤！')
  }

  componentWillUnmount(){
    window.removeEventListener('keydown', this.onKeyDown)
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