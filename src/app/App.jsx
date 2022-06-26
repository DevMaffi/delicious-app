import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Filters } from '../components'
import { Home, Cuisine } from '../pages'

function App() {
  return (
    <Router>
      <Filters />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
      </Routes>
    </Router>
  )
}

export default App
