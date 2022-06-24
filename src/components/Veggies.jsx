import { useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import * as recipesService from '../services/recipesService'
import useHttp from '../hooks/useHttp'

import '@splidejs/react-splide/css'

function Veggies() {
  const [fetchData, veggies] = useHttp({
    defaultValue: [],
    httpCallback: () =>
      recipesService.getRecipesByTags('veggies', 9, ['vegetarian']),
  })

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="veggies section">
      <h2>Our Vegetarian Picks</h2>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '2.5rem',
        }}
      >
        {veggies.map(recipe => (
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

export default Veggies
