import React, { Component } from 'react'

class Settings extends Component {
  sidebar = 'close'

  setOpen = () => {
    document.getElementById('settingsSidebar').classList.remove('slideOutLeft')
    document.getElementById('settingsList').classList.remove('slideOutLeft')
    document.getElementById('settings').classList.remove('rotateLeft')
    document.getElementById('settingsSidebar').classList.remove('invisible')
    document.getElementById('settingsList').classList.remove('invisible')
    document.getElementById('settingsSidebar').classList.add('slideInLeft')
    document.getElementById('settingsList').classList.add('slideInLeft')
    document.getElementById('settings').classList.add('rotateRight')
    this.sidebar = 'open'
  }

  setClose = () => {
    document.getElementById('settingsSidebar').classList.remove('slideInLeft')
    document.getElementById('settingsList').classList.remove('slideInLeft')
    document.getElementById('settings').classList.remove('rotateRight')
    document.getElementById('settingsSidebar').classList.add('slideOutLeft')
    document.getElementById('settingsList').classList.add('slideOutLeft')
    document.getElementById('settings').classList.add('rotateLeft')
    this.sidebar = 'close'
  }

  handleClick = () => this.sidebar === 'open' ? this.setClose() : this.setOpen()

  render() {
    return (
      <button>
        <img
          id="settings"
          onClick={this.handleClick} src="https://i.postimg.cc/tJDyNkRz/settings-256.png" alt="add"
        />
      </button>
    )
  }
}

export default Settings
