import React, { Component } from 'react'

class About extends Component {
  aboutFocus = 'close'

  setOpen = () => {
    document.getElementById('aboutFocus').classList.remove('invisible')
    document.getElementById('aboutFocus').classList.remove('fadeOut')
    document.getElementById('aboutFocus').classList.add('fadeIn')
    
    document.getElementById('settingsSidebar').classList.remove('slideInLeft')
    document.getElementById('settingsList').classList.remove('slideInLeft')
    document.getElementById('settings').classList.remove('rotateRight')
    document.getElementById('settingsSidebar').classList.add('slideOutLeft')
    document.getElementById('settingsList').classList.add('slideOutLeft')
    document.getElementById('settings').classList.add('rotateLeft')
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
