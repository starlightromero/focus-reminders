import React, { Component } from 'react'

class Settings extends Component {
  setting = 'light'

  setLight = () => {
    document.getElementById('App').classList.remove('dark')
    document.getElementById('App').classList.add('light')
    this.settings = 'light'
  }

  setDark = () => {
    document.getElementById('App').classList.remove('light')
    document.getElementById('App').classList.add('dark')
    this.settings = 'dark'
  }

  handleClick = () => this.settings === 'light' ? this.setDark() : this.setLight()

  render () {
    return (
      <button>
       <img onClick={this.handleClick} src="https://i.postimg.cc/tJDyNkRz/settings-256.png" alt="settings" />
      </button>
    )
  }
}

export default Settings
