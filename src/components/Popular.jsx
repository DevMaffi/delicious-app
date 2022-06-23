import * as recipesService from '../services/recipesService'
import useHttp from '../hooks/useHttp'

function Popular() {
  const { data: popularRecipes } = useHttp({
    defaultValue: [],
    httpCallback: () => recipesService.getRecipes(9),
    onError: error => console.error(error.message),
    propName: 'recipes',
  })

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
