import React, { Component } from 'react'

class Settings extends Component {
  sidebar = 'close'

  setOpen = () => {
    document.getElementById('settingsSidebar').classList.remove('invisible')
    this.sidebar = 'open'
  }

  setClose = () => {
    document.getElementById('settingsSidebar').classList.add('invisible')
    this.sidebar = 'close'
  }

  handleClick = () => this.sidebar === 'open' ? this.setClose() : this.setOpen()

  handleMouseOver = () => document.getElementById('settings').classList.add('rotateRight')

  handleMouseLeave = () => document.getElementById('settings').classList.remove('rotateRight')

  render() {
    return (
      <button>
        <img
          id="settings"
          className="animated"
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.handleClick} src="https://i.postimg.cc/tJDyNkRz/settings-256.png" alt="add"
        />
      </button>
    )
  }
}

export default Settings
