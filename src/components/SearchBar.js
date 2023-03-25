import React from 'react'

function SearchBar({placeHolder, data}) {
  return (
    <div className='search'>
      <div className='searchInputs'></div>
      <input type='text' />
      <div className='searchIcon'></div>
      <div className='dataResult'></div>
      Searchbar
    </div>
  )
}

export default SearchBar