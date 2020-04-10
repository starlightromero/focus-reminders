import React, { Component } from 'react'

class AddFocusForm extends Component {
  state = {
    title: ''
  }

  handleChange = (event) => this.setState({ [event.target.name]: event.target.value })

  handleSubmit = (event) => {
    document.getElementById('addFocusContainer').classList.add('invisible')
    document.getElementById('addFocusForm').classList.add('invisible')

    event.preventDefault()
    this.props.addFocus(this.state.title)
    this.setState({ title: '' })
  }

  render() {
    return (
      <div onSubmit={this.handleSubmit} id="addFocusContainer" className="invisible">
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

export default AddFocusForm
