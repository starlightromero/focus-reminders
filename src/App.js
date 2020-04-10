import React, { Component } from 'react'
import Header from './components/Header'
import SettingsSidebar from './components/SettingsSidebar'
import AddFocusForm from './components/AddFocusForm'
import FocusList from './components/FocusList'

class App extends Component {
  state = {
    focuses: [
      {id: 1, title: 'Take out trash', completed: false },
      {id: 2, title: 'Get groceries', completed: false },
      {id: 3, title: 'Wash dishes', completed: false },
      {id: 4, title: 'Clean closet', completed: false },
      {id: 5, title: 'Take out trash', completed: false },
      {id: 6, title: 'Get groceries', completed: false },
      {id: 7, title: 'Wash dishes', completed: false },
      {id: 8, title: 'Clean closet', completed: false },
      {id: 9, title: 'Take out trash', completed: false },
      {id: 10, title: 'Get groceries', completed: false },
      {id: 11, title: 'Wash dishes', completed: false },
      {id: 12, title: 'Clean closet', completed: false },
    ]
  }

  randomId = () => Math.floor(Math.random() * 1000)

  addFocus = title => {
    const newFocus = {
      id: this.randomId(),
      title,
      completed: false
    }
    this.setState({ focuses: [newFocus, ...this.state.focuses] })
  }

  toggleComplete = id => {
    this.setState({
      focuses: this.state.focuses.map(focus => {
        if (focus.id === id) {
          focus.completed = !focus.completed
        }
        return focus
      }).sort((a, b) => a.completed - b.completed)
    })
  }

  changeFocus = title => {
    console.log(title)
  }

  deleteFocus = id => {
    this.setState({
      focuses: [...this.state.focuses.filter(focus => focus.id !== id)]
    })
  }

  render() {
    return (
      <div id="App" className="App light">
        <Header/>
        <SettingsSidebar />
        <AddFocusForm
          addFocus={this.addFocus}
        />
        <FocusList
          focuses={this.state.focuses}
          toggleComplete={this.toggleComplete}
          changeFocus={this.changeFocus}
          deleteFocus={this.deleteFocus}
        />
      </div>
    )
  }
}

export default App
