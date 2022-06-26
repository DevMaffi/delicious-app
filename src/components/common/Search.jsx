import { FaSearch } from 'react-icons/fa'

import '../../styles/modules/search.sass'

function Search({ value, onChange, onSubmit }) {
  return (
    <form className="search" onSubmit={onSubmit}>
      <div className="search__input-container">
        <FaSearch />
        <input
          className="search__input"
          value={value}
          onChange={onChange}
          type="text"
        />
      </div>
    </form>
  )
}

export default Search
