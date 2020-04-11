import React, { Component } from 'react'

class AboutFocus extends Component {
  handleClick = () => {
    document.getElementById('aboutFocus').classList.add('invisible')
    document.getElementById('settingsSidebar').classList.add('invisible')
    document.getElementById('addFocusSidebar').classList.add('invisible')
  }

  render() {
    return (
      <div id="aboutFocus" className="invisible" onClick={this.handleClick}>
        <h3>Focus (v) - to cause rays of light to converge at a single point</h3>
        <h1>this is FOCUS.</h1>
        <p>Eyes interpret the world by converting rays of light into chemical signals.</p>
        <p>Learn to focus the convergence.</p>
        <p>The light is yours to control.</p>
      </div>
    )
  }
}

export default AboutFocus
