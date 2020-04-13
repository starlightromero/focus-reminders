import React, { Component } from 'react'
import search from '../assets/search.png'

class Search extends Component {
  render() {
    return (
      <div className="search">
        <img src={search} alt="search"/>
      </div>
    )
  }
}

export default Search
