import React, { Component } from 'react'

class FocusSidebar extends Component {
  state = {
    title: ''
  }

  handleChange = (event) => this.setState({ [event.target.name]: event.target.value })

  handleSubmit = (event) => {
    document.getElementById('addFocusSidebar').classList.remove('slideInRight')
    document.getElementById('addFocusForm').classList.remove('slideInRight')
    document.getElementById('add').classList.remove('rotateLeft')
    document.getElementById('addFocusSidebar').classList.add('slideOutRight')
    document.getElementById('addFocusForm').classList.add('slideOutRight')
    document.getElementById('add').classList.add('rotateRight')

    event.preventDefault()
    this.props.addFocus(this.state.title)
    this.setState({ title: '' })
  }

  render() {
    return (
      <div onSubmit={this.handleSubmit} id="addFocusSidebar" className="invisible">
        <form id="addFocusForm" className="addFocusForm invisible">
          <input
            type="text"
            name="title"
            placeholder="Add Focus..."
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br/>
          <input
          type="submit"
          value="Add Focus"
          />
        </form>
      </div>
    )
  }
}

export default FocusSidebar
