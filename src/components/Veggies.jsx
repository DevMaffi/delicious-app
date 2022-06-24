import { useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import { Card } from './common'

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
            <Card title={recipe.title} image={recipe.image} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default Veggies
