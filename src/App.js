import React, { Component } from 'react';

class NoFocuses extends Component {
  render() {
    return (
      <h2 className="noFocuses">
        Add a <span>FOCUS</span> to your life
      </h2>
    )
  }
}

class Focus extends Component {
  completed = () => this.props.completed ? 'completed' : ''

  render() {
    const { id, title } = this.props
    return (
      <div className="focus">
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

class FocusList extends Component {
  checkLength = length => !length ? <NoFocuses /> : ''

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
    );
  }
}

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

class Title extends Component {
  render() {
    return (
      <div className="title">
        <h1>Focus</h1>
        <h3>On what drives you</h3>
      </div>
    )
  }
}

class Settings extends Component {
  setting = 'light'

  setLight = () => {
    document.getElementById('App').classList.remove('dark')
    document.getElementById('App').classList.add('light')
    this.settings = 'light'
  }


  setDark = () => {
    document.getElementById('App').classList.remove('light')
    document.getElementById('App').classList.add('dark')
    this.settings = 'dark'
  }

  handleClick = () => this.settings === 'light' ? this.setDark() : this.setLight()

  render () {
    return (
      <button>
       <img onClick={this.handleClick} src="https://i.postimg.cc/tJDyNkRz/settings-256.png" alt="settings" />
      </button>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <header>
        <Settings />
        <Title />
        <AddFocus />
      </header>
    )
  }
}

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
          focus.completed = !focus.completed;
        }
        return focus;
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

export default App;
