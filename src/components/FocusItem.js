import React, { Component } from 'react'

class FocusItem extends Component {
  completed = () => this.props.completed ? 'completed' : ''

  render() {
    const { id, title } = this.props
    return (
      <div className="focusItem animated flipInX">
        <p className={this.completed()}>
          <input
            type="checkbox"
            name={id}
            defaultValue={id}
            onChange={this.props.toggleComplete.bind(this, id)}
          />
          {title}
          <button onClick={this.props.deleteFocus.bind(this, id)}>X</button>
        </p>
      </div>
    )
  }
}

export default FocusItem
