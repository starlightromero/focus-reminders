import React, { Component } from 'react'

class SwitchMode extends Component {
  setting = 'light'

  setLight = () => {
    document.getElementById('App').classList.remove('dark')
    document.getElementById('App').classList.add('light')
    document.getElementById('lightMode').classList.add('invisible')
    document.getElementById('darkMode').classList.remove('invisible')
    this.settings = 'light'
  }

  setDark = () => {
    document.getElementById('App').classList.remove('light')
    document.getElementById('App').classList.add('dark')
    document.getElementById('darkMode').classList.add('invisible')
    document.getElementById('lightMode').classList.remove('invisible')
    this.settings = 'dark'
  }

  handleClick = () => this.settings === 'light' ? this.setDark() : this.setLight()

  render () {
    return (
      <button onClick={this.handleClick}>
        <p id="lightMode" className="invisible">Light Mode</p>
        <p id="darkMode">Dark Mode</p>
      </button>
    )
  }
}

export default SwitchMode
