import React from 'react'

const NavBar = ({ searchTerm, onSearchChange, onPageChange }) => {

  return (
    <header>
      <div className="top-nav">
        <div className="logo">
          <h2>AlienWares</h2>
        </div>
        <form className="search">
          <input
            type="text"
            placeholder="Search listings..."
            value={searchTerm}
            onChange={event => onSearchChange(event.target.value)}
          />
          <input type="submit" value="🔍" />
        </form>
        <nav>
          <button onClick={() => onPageChange("listings")}>View Listings</button>
          <button onClick={() => onPageChange("new-listing")}>Add Listing</button>
        </nav>
      </div>
    </header>
  )
}

export default NavBar