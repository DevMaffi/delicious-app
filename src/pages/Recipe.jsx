import { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Button } from '../components/common'

import * as recipesService from '../services/recipesService'
import useHttp from '../hooks/useHttp'
import { recipeActions } from '../store'

import '../styles/modules/recipe.sass'

function Recipe() {
  const { activeTab } = useSelector(state => state.recipe)
  const dispatch = useDispatch()

  const params = useParams()

  const httpCallback = useCallback(() => {
    return recipesService.getDetails(params.id)
  }, [params.id])

  const [fetchData, details] = useHttp({
    defaultValue: {},
    httpCallback,
  })

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="recipe">
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <div className="recipe__info">
        <Button
          active={activeTab === 'instructions'}
          onClick={() => {
            dispatch(recipeActions.changeTab('instructions'))
          }}
        >
          Instructions
        </Button>
        <Button
          active={activeTab === 'ingredients'}
          onClick={() => {
            dispatch(recipeActions.changeTab('ingredients'))
          }}
        >
          Ingredients
        </Button>
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients?.map(ingredient => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Recipe
