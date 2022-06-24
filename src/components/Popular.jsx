import { useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import { Card } from './common'

import * as recipesService from '../services/recipesService'
import useHttp from '../hooks/useHttp'

import '@splidejs/react-splide/css'

function Popular() {
  const [fetchData, popularRecipes] = useHttp({
    defaultValue: [],
    httpCallback: () => recipesService.getRecipes('popular', 9),
  })

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="popular section">
      <h2>Popular Picks</h2>
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
            <Card title={recipe.title} image={recipe.image} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default Popular
