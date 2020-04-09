import React, { Component } from 'react';
import './stylesheets/screen.css';

const reminderArray = [
  {id: 1, title: 'Take out trash', urgency: 3, completed: false },
  {id: 2, title: 'Get groceries', urgency: 3, completed: false },
  {id: 3, title: 'Wash dishes', urgency: 3, completed: false },
  {id: 4, title: 'Clean closet', urgency: 3, completed: false },
]

class Reminder extends Component {
  render() {
    return (
      <div id={this.props.id} class="reminder">
        <input type="checkbox" name={this.props.id} value={this.props.id}/>
        <label for={this.props.id}>{this.props.title}</label>
      </div>
    );
  }
}

class ReminderList extends Component {
  render() {
    return (
      <div class="reminderList">
        {this.props.reminders.map(reminder =>
          <Reminder key={reminder.id} {...reminder}/>)}
      </div>
    );
  }
}

class App extends Component {
  state = {
    reminders: reminderArray,
  };

  render() {
    return (
      <div className="App">
        <ReminderList reminders={this.state.reminders}/>
      </div>
    );
  }
}

export default App;
