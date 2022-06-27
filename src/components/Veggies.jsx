import { useEffect, useCallback } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import { SlideCard } from './common'

import * as recipesService from '../services/recipesService'
import useHttp from '../hooks/useHttp'

import '@splidejs/react-splide/css'

function Veggies() {
  const httpCallback = useCallback(() => {
    return recipesService.getRecipesByTags('veggies', 9, ['vegetarian'])
  }, [])

  const [fetchData, veggies] = useHttp({
    defaultValue: [],
    httpCallback,
  })

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="veggies section">
      <h3>Our Vegetarian Picks</h3>
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
            <SlideCard
              to={`/recipe/${recipe.id}`}
              title={recipe.title}
              image={recipe.image}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default Veggies
