import React, { Component } from 'react'
import Focus from './Focus'
import NoFocus from './NoFocus'

class FocusList extends Component {
  checkLength = length => !length ? <NoFocus /> : ''

  render() {
    return (
      <div className="focusList">
        {this.checkLength(this.props.focuses.length)}
        {this.props.focuses.map(focus =>
          <Focus
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
