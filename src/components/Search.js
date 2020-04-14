import React, { Component } from 'react'
import search from '../assets/search.png'

class Search extends Component {
  isSearchOpen = false

  openSearch = () => {
    document.getElementById('search').classList.add('invisible')
    document.getElementById('searchForm').classList.remove('invisible')
    this.isSearchOpen = true
  }

  closeSearch = () => {
    document.getElementById('searchForm').classList.add('invisible')
    document.getElementById('search').classList.remove('invisible')
    this.isSearchOpen = false
  }

  handleClick = () => this.isSearchOpen ? this.closeSearch() : this.openSearch()

  render() {
    return (
      <div id="searchContainer" className="searchContainer" onClick={this.handleClick}>
        <img id="search" className="search" src={search} alt="search"/>
        <form id="searchForm" className="invisible">
          <input
            type="text"
            placeholder="Search..."
          />
          <input
           type="button"
           value="x"
          />
        </form>
      </div>
    )
  }
}

export default Search
