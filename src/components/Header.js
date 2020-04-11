import React, { Component } from 'react'
import Settings from './Settings'
import Title from './Title'
import AddFocus from './AddFocus'

class Header extends Component {
  render() {
    return (
      <header id="header">
        <Settings />
        <Title />
        <AddFocus />
      </header>
    )
  }
}

export default Header
