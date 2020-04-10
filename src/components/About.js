import React, { Component } from 'react'

class About extends Component {
  aboutFocus = 'close'

  setOpen = () => {
    document.getElementById('aboutFocus').classList.remove('invisible')
    this.aboutFocus = 'open'
  }

  setClose = () => {
    document.getElementById('aboutFocus').classList.add('invisible')
    this.aboutFocus = 'close'
  }

  handleClick = () => this.aboutFocus === 'open' ? this.setClose() : this.setOpen()

  render() {
    return (
      <button onClick={this.handleClick}>
        About
      </button>
    )
  }
}

export default About
