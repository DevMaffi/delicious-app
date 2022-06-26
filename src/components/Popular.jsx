import { useEffect, useCallback } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import { Card } from './common'

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
      <h3>Popular Picks</h3>
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
            <Card title={recipe.title} image={recipe.image} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default Popular
