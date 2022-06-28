import { BrowserRouter as Router } from 'react-router-dom'

import { NavBar, Filters } from '../components'
import Pages from '../pages'

function App() {
  return (
    <Router>
      <NavBar />
      <Filters />
      <Pages />
    </Router>
  )
}

export default App
