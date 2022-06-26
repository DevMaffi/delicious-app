import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Categories from './Categories'
import { Search } from './common'

function Filters() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const inputHandler = e => {
    setQuery(e.currentTarget.value)
  }

  const submitHandler = e => {
    e.preventDefault()
    navigate(`/searched/${query}`)
  }

  return (
    <>
      <Search value={query} onChange={inputHandler} onSubmit={submitHandler} />
      <Categories />
    </>
  )
}

export default Filters
