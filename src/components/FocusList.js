import React, { Component } from 'react'
import FocusItem from './FocusItem'
import NoFocus from './NoFocus'

class FocusList extends Component {
  checkLength = length => !length ? <NoFocus /> : ''

  handleClick = () => {
    document.getElementById('settingsSidebar').classList.add('invisible')
    document.getElementById('addFocusSidebar').classList.add('invisible')
    document.getElementById('addFocusForm').classList.add('invisible')
    document.getElementById('aboutFocus').classList.add('invisible')
  }

  render() {
    return (
      <div className="focusList" onClick={this.handleClick}>
        {this.checkLength(this.props.focuses.length)}
        {this.props.focuses.map(focus =>
          <FocusItem
            key={focus.id}
            toggleComplete={this.props.toggleComplete}
            changeFocus={this.props.changeFocus}
            deleteFocus={this.props.deleteFocus}
            {...focus}
          />
        )}
      </div>
    )
  }
}

export default FocusList
