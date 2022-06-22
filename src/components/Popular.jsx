import { useState, useEffect } from 'react'

function Popular() {
  const [popularRecipes, setRecipes] = useState([])

  useEffect(() => {
    const getRecipes = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      )
      const { recipes } = await res.json()

      setRecipes(recipes)
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
