import { useState, useEffect } from 'react'

import * as recipesService from '../services/recipesService'

function Popular() {
  const [popularRecipes, setRecipes] = useState([])

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const { data } = await recipesService.getRecipes(9)
        setRecipes(data.recipes)
      } catch (error) {
        console.error(error.message)
      }
    }

    getRecipes()
  }, [])

  return (
    <>
      <h2>Popular</h2>
      {popularRecipes.map(recipe => (
        <div key={recipe.id}>
          <h4>{recipe.title}</h4>
        </div>
      ))}
    </>
  )
}

export default Popular
