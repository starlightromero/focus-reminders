import React, { Component } from 'react';

class Reminder extends Component {
  state = {
    title: '',
  }

  strikeout = () => {
    return {
      textDecoration: this.props.completed ? 'line-through' : 'none'
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.changeReminder(this.state.title);
  }

  render() {
    const { id, title } = this.props;
    return (
      <div className="reminder">
        <p>
          <input
            type="checkbox"
            name={id}
            defaultValue={id}
            onChange={this.props.toggleComplete.bind(this, id)}
          />
          <input
            id={title}
            type="text"
            name="title"
            defaultValue={title}
            value={this.state.title}
            style={this.strikeout()}
            onChange={this.handleChange}
          />
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
        <AddReminder addReminder={this.props.addReminder}/>
      </header>
    );
  }
}

class AddReminderForm extends Component {
  state = {
    title: '',
  }

  handleChange = (event) => this.setState({ [event.target.name]: event.target.value });

  handleClick = (event) => {
    document.getElementById('addReminderContainer').classList.add('invisible');
    document.getElementById('AddReminderForm').classList.add('invisible');

    event.prevwentDefault();
    this.props.addReminder(
      this.state.title,
    );
    this.setState({
      title: '',
    })
  }

  render() {
    return (
      <div id="addReminderContainer" className="invisible">
        <form id="addReminderForm" className="invisible">
          <input
            required
            type="text"
            name="title"
            placeholder="Add Reminder..."
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
          type="submit"
          value="Add Reminder"
          onClick={this.handleClick}
          />
        </form>
      </div>
    );
  }
}

class App extends Component {
  state = {
    reminders: [
      {id: 1, title: 'Take out trash', urgency: 3, completed: false },
      {id: 2, title: 'Get groceries', urgency: 3, completed: false },
      {id: 3, title: 'Wash dishes', urgency: 3, completed: false },
      {id: 4, title: 'Clean closet', urgency: 3, completed: false },
    ]
  };

  addReminder = () => {
    // this.setState({
    //   reminders: [...this.state.reminders, res.data]
    // });
    console.log("reminder added");
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
        <Header
          addReminder={this.addReminder}
        />
        <AddReminderForm />
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
