import { useEffect, useCallback } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import { SlideCard } from './common'

import * as recipesService from '../services/recipesService'
import useHttp from '../hooks/useHttp'

import '@splidejs/react-splide/css'

function Popular() {
  const httpCallback = useCallback(() => {
    return recipesService.getRecipes('popular', 9)
  }, [])

  const [fetchData, popularRecipes] = useHttp({
    defaultValue: [],
    httpCallback,
  })

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="popular section">
      <h3>Trending</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '2.5rem',
        }}
      >
        {popularRecipes.map(recipe => (
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

export default Popular
