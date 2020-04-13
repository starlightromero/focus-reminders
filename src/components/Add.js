import React, { Component } from 'react'

class Add extends Component {
  addForm = 'close'

  setOpen = () => {
    document.getElementById('addFocusSidebar').classList.remove('invisible')
    document.getElementById('addFocusForm').classList.remove('invisible')
    this.addForm = 'open'
  }

  setClose = () => {
    document.getElementById('addFocusSidebar').classList.add('invisible')
    document.getElementById('addFocusForm').classList.add('invisible')
    this.addForm = 'close'
  }

  handleClick = () => this.addForm === 'open' ? this.setClose() : this.setOpen()

  handleMouseOver = () => document.getElementById('add').classList.add('rotateLeft')

  handleMouseLeave = () => document.getElementById('add').classList.remove('rotateLeft')

  render() {
    return (
      <button>
        <img
          id="add"
          className="animated"
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.handleClick} src="https://i.postimg.cc/nLftDrq2/add-256.png" alt="add"
        />
      </button>
    )
  }
}

export default Add
