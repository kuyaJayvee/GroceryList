import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <form className='search' onSubmit={(e) => e.preventDefault()}>
          <input
              type="text"
              name=""
              id=""
              autoFocus
              required
        placeholder='Search Items'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
     </form>
  )
}

export default SearchItem