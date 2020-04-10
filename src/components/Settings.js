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

  render() {
    return (
      <button>
        <img onClick={this.handleClick} src="https://i.postimg.cc/tJDyNkRz/settings-256.png" alt="add"/>
      </button>
    )
  }
}

export default Settings
