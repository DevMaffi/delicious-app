import { useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'

import { Card } from '../components/common'

import * as recipesService from '../services/recipesService'
import useHttp from '../hooks/useHttp'

import '../styles/modules/searched.sass'

function Searched() {
  const params = useParams()

  const httpCallback = useCallback(() => {
    return recipesService.getRecipesByQuery(params.query)
  }, [params.query])

  const [fetchData, searchedRecipes] = useHttp({
    defaultValue: [],
    httpCallback,
  })

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="searched section">
      {searchedRecipes.map(recipe => (
        <Card
          key={recipe.id}
          classes="searched__card"
          image={recipe.image}
          title={recipe.title}
        />
      ))}
    </div>
  )
}

export default Searched
