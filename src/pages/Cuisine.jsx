import { useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import { RecipesGrid } from '../components/common'

import useHttp from '../hooks/useHttp'

function Cuisine({ paramsRequest, queryParam }) {
  const params = useParams()

  /* eslint-disable react-hooks/exhaustive-deps */
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
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="section"
    >
      <RecipesGrid recipes={cuisine} />
    </motion.div>
  )
}

export default Cuisine
