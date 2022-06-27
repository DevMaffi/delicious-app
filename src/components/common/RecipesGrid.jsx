import Card from './Card'

import '../../styles/modules/recipes.sass'

function RecipesGrid({ recipes }) {
  return (
    <div className="recipes grid">
      {recipes.map(recipe => (
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

export default RecipesGrid
