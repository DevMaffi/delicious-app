import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { Home, Cuisine, Recipe } from './index'

import * as recipesService from '../services/recipesService'

function Pages() {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
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
    </AnimatePresence>
  )
}

export default Pages
