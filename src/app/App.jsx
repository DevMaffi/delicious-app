import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Categories } from '../components'
import { Home, Cuisine } from '../pages'

function App() {
  return (
    <Router>
      <Categories />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
      </Routes>
    </Router>
  )
}

export default App
