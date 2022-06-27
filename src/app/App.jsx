import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Filters } from '../components'
import { Home, Cuisine, Recipe } from '../pages'

import * as recipesService from '../services/recipesService'

function App() {
  return (
    <Router>
      <Filters />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/searched/:query"
          element={
            <Cuisine
              paramsRequest={recipesService.getRecipesByQuery}
              queryParam="query"
            />
          }
        />
        <Route
          path="/cuisine/:type"
          element={
            <Cuisine
              paramsRequest={recipesService.getRecipesByCuisine}
              queryParam="type"
            />
          }
        />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </Router>
  )
}

export default App
