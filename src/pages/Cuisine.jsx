import { useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'

import * as recipesService from '../services/recipesService'
import useHttp from '../hooks/useHttp'

import '../styles/modules/cuisine.sass'

function Cuisine() {
  const params = useParams()

  const httpCallback = useCallback(() => {
    return recipesService.getRecipesByCuisine(params.type)
  }, [params.type])

  const [fetchData, cuisine] = useHttp({
    defaultValue: [],
    httpCallback,
  })

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="cuisine section">
      {cuisine.map(recipe => (
        <div key={recipe.id} className="cuisine__card">
          <img src={recipe.image} alt={recipe.title} />
          <h4>{recipe.title}</h4>
        </div>
      ))}
    </div>
  )
}

export default Cuisine
