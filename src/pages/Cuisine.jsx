import { useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'

import { Card } from '../components/common'

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
        <Card
          key={recipe.id}
          to={`/recipe/${recipe.id}`}
          image={recipe.image}
          title={recipe.title}
        />
      ))}
    </div>
  )
}

export default Cuisine
