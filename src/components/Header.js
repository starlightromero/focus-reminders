import React, { Component } from 'react'
import Settings from './Settings'
import Title from './Title'
import Add from './Add'

class Header extends Component {
  render() {
    return (
      <header id="header">
        <Settings />
        <Title />
        <Add />
      </header>
    )
  }
}

export default Header
