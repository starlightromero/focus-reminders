import React, { Component } from 'react'
import SwitchMode from './SwitchMode'
import About from './About'

class SettingsSidebar extends Component {
  render () {
    return (
      <div id="settingsSidebar" className="invisible">
        <div id="settingsList" className="settingsList invisible">
          <SwitchMode />
          <About />
        </div>
      </div>
    )
  }
}

export default SettingsSidebar
