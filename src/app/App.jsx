import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Filters } from '../components'
import { Home, Searched, Cuisine } from '../pages'

function App() {
  return (
    <Router>
      <Filters />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searched/:query" element={<Searched />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
      </Routes>
    </Router>
  )
}

export default App
