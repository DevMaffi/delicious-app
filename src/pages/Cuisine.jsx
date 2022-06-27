import { useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'

import { RecipesGrid } from '../components/common'

import useHttp from '../hooks/useHttp'

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
    <div className="section">
      <RecipesGrid recipes={cuisine} />
    </div>
  )
}

export default Cuisine
