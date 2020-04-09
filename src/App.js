import React, { Component } from 'react';

class Reminder extends Component {
  strikeout = () => {
    return {
      textDecoration: this.props.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props;
    return (
      <div style={this.strikeout()} className="reminder">
        <p>
          <input
            type="checkbox"
            name={id}
            defaultValue={id}
            onChange={this.props.toggleComplete.bind(this, id)}
          />
          {title}
          <button onClick={this.props.deleteReminder.bind(this, id)}>X</button>
        </p>
      </div>
    );
  }
}

class ReminderList extends Component {
  render() {
    return (
      <div className="reminderList">
        {this.props.reminders.map(reminder =>
          <Reminder
            key={reminder.id}
            toggleComplete={this.props.toggleComplete}
            changeReminder={this.props.changeReminder}
            deleteReminder={this.props.deleteReminder}
            {...reminder}
          />
        )}
      </div>
    );
  }
}

class AddReminderForm extends Component {
  state = {
    title: ''
  }

  handleChange = (event) => this.setState({ [event.target.name]: event.target.value });

  handleSubmit = (event) => {
    document.getElementById('addReminderContainer').classList.add('invisible');
    document.getElementById('addReminderForm').classList.add('invisible');

    event.preventDefault();
    this.props.addReminder(this.state.title);
    this.setState({ title: '' });
  }

  render() {
    return (
      <div onSubmit={this.handleSubmit} id="addReminderContainer" className="invisible">
        <form id="addReminderForm" className="invisible">
          <input
            type="text"
            name="title"
            placeholder="Add Reminder..."
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
          type="submit"
          value="Add Reminder"
          />
        </form>
      </div>
    );
  }
}

class AddReminder extends Component {
  handleClick = () => {
    document.getElementById('addReminderContainer').classList.remove('invisible');
    document.getElementById('addReminderForm').classList.remove('invisible');
  }

  render() {
    return (
      <button onClick={this.handleClick}>+</button>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header>
        <button>S</button>
        <div className="title">
          <h1>Focus</h1>
          <h3>On what drives you</h3>
        </div>
        <AddReminder/>
      </header>
    );
  }
}

class App extends Component {
  state = {
    reminders: [
      {id: 1, title: 'Take out trash', completed: false },
      {id: 2, title: 'Get groceries', completed: false },
      {id: 3, title: 'Wash dishes', completed: false },
      {id: 4, title: 'Clean closet', completed: false },
    ]
  };

  randomId = () => {
    return Math.floor(Math.random() * 1000);
  };

  addReminder = title => {
    const newReminder = {
      id: this.randomId(),
      title,
      completed: false
    };
    this.setState({ reminders: [...this.state.reminders, newReminder] });
  };

  toggleComplete = id => {
    this.setState({
      reminders: this.state.reminders.map(reminder => {
        if (reminder.id === id) {
          reminder.completed = !reminder.completed;
        }
        return reminder;
      })
    });
  };

  changeReminder = title => {
    console.log(title)
  };

  deleteReminder = id => {
    this.setState({
      reminders: [...this.state.reminders.filter(reminder => reminder.id !== id)]
    });
  };

  render() {
    return (
      <div className="App">
        <Header/>
        <AddReminderForm
          addReminder={this.addReminder}
        />
        <ReminderList
          reminders={this.state.reminders}
          toggleComplete={this.toggleComplete}
          changeReminder={this.changeReminder}
          deleteReminder={this.deleteReminder}
        />
      </div>
    );
  }
}

export default App;
