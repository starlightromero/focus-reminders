import React, { Component } from 'react'
import SwitchMode from './SwitchMode'
import About from './About'

class SettingsSidebar extends Component {
  render () {
    return (
      <div id="settingsSidebar" className="invisible">
        <SwitchMode />
        <About />
      </div>
    )
  }
}

export default SettingsSidebar
