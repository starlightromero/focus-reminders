import React, { Component } from 'react'
import add from '../assets/add.png'

class Add extends Component {
  addForm = 'close'

  setOpen = () => {
    document.getElementById('addFocusSidebar').classList.remove('slideOutRight')
    document.getElementById('addFocusForm').classList.remove('slideOutRight')
    document.getElementById('add').classList.remove('rotateRight')
    document.getElementById('addFocusSidebar').classList.remove('invisible')
    document.getElementById('addFocusForm').classList.remove('invisible')
    document.getElementById('addFocusSidebar').classList.add('slideInRight')
    document.getElementById('addFocusForm').classList.add('slideInRight')
    document.getElementById('add').classList.add('rotateLeft')
    this.addForm = 'open'
  }

  setClose = () => {
    document.getElementById('addFocusSidebar').classList.remove('slideInRight')
    document.getElementById('addFocusForm').classList.remove('slideInRight')
    document.getElementById('add').classList.remove('rotateLeft')
    document.getElementById('addFocusSidebar').classList.add('slideOutRight')
    document.getElementById('addFocusForm').classList.add('slideOutRight')
    document.getElementById('add').classList.add('rotateRight')
    this.addForm = 'close'
  }

  handleClick = () => this.addForm === 'open' ? this.setClose() : this.setOpen()

  render() {
    return (
      <button>
        <img
          id="add"
          onClick={this.handleClick} src={add} alt="add"
        />
      </button>
    )
  }
}

export default Add
