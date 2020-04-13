import React, { Component } from 'react'

class About extends Component {
  aboutFocus = 'close'

  setOpen = () => {
    document.getElementById('aboutFocus').classList.remove('invisible')
    document.getElementById('aboutFocus').classList.remove('fadeOut')
    document.getElementById('aboutFocus').classList.add('fadeIn')
    this.aboutFocus = 'open'
  }

  setClose = () => {
    document.getElementById('aboutFocus').classList.remove('fadeIn')
    document.getElementById('aboutFocus').classList.add('fadeOut')
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
