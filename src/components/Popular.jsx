import { Splide, SplideSlide } from '@splidejs/react-splide'

import * as recipesService from '../services/recipesService'
import useHttp from '../hooks/useHttp'

import '@splidejs/react-splide/css'
import './popular.sass'

function Popular() {
  const { data: popularRecipes } = useHttp({
    defaultValue: [],
    httpCallback: () => recipesService.getRecipes(9),
    onError: error => console.error(error.message),
    propName: 'recipes',
  })

  return (
    <div className="popular">
      <h2>Popular picks</h2>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '3.5rem',
        }}
      >
        {popularRecipes.map(recipe => (
          <SplideSlide key={recipe.id}>
            <div className="popular__card">
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              <div className="gradient"></div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default Popular
