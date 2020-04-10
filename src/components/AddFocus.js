import React, { Component } from 'react'

class AddFocus extends Component {
  addForm = 'open'

  setOpen = () => {
    document.getElementById('addFocusContainer').classList.remove('invisible')
    document.getElementById('addFocusForm').classList.remove('invisible')
    this.addForm = 'open'
  }

  setClose = () => {
    document.getElementById('addFocusContainer').classList.add('invisible')
    document.getElementById('addFocusForm').classList.add('invisible')
    this.addForm = 'close'
  }

  handleClick = () => this.addForm === 'open' ? this.setClose() : this.setOpen()

  render() {
    return (
      <button>
        <img onClick={this.handleClick} src="https://i.postimg.cc/nLftDrq2/add-256.png" alt="add"/>
      </button>
    )
  }
}

export default AddFocus
