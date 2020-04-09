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
            name={title}
            value={title}
            onClick={this.props.toggleComplete.bind(this, id)}
          />
          {title}
          <button onClick={this.props.deleteRemininder.bind(this, id)}>X</button>
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
            deleteRemininder={this.props.deleteRemininder}
            {...reminder}
          />
        )}
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

  deleteRemininder = id => {
    this.setState({
      reminders: [...this.state.reminders.filter(reminder => reminder.id !== id)]
    });
  };

  render() {
    return (
      <div className="App">
        <header>

        </header>
          <ReminderList
            reminders={this.state.reminders}
            toggleComplete={this.toggleComplete}
            deleteRemininder={this.deleteRemininder}
          />
      </div>
    );
  }
}

export default App;
