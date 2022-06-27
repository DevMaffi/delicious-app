import { useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'

import { Card } from '../components/common'

import useHttp from '../hooks/useHttp'

import '../styles/modules/cuisine.sass'

function Cuisine({ paramsRequest, queryParam }) {
  const params = useParams()

  /* eslint-disable react-hooks/exhaustive-deps*/
  const httpCallback = useCallback(() => {
    return paramsRequest(params[queryParam])
  }, [params[queryParam]])

  const [fetchData, cuisine] = useHttp({
    defaultValue: [],
    httpCallback,
  })

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="cuisine section">
      {cuisine.map(recipe => (
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

export default Cuisine
