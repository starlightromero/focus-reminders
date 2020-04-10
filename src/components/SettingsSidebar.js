import React, { Component } from 'react'

class SettingsSidebar extends Component {
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
      <div id="settingsSidebar" className="invisible">
        <button onClick={this.handleClick}>
         Switch Mode
        </button>
      </div>
    )
  }
}

export default SettingsSidebar
