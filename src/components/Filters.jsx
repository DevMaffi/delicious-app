import { useState } from 'react'

import Categories from './Categories'
import { Search } from './common'

function Filters() {
  const [query, setQuery] = useState('')

  const inputHandler = e => {
    setQuery(e.currentTarget.value)
  }

  const submitHandler = e => {
    e.preventDefault()
  }

  return (
    <>
      <Search value={query} onChange={inputHandler} onSubmit={submitHandler} />
      <Categories />
    </>
  )
}

export default Filters
