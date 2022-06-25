import { useState, useCallback } from 'react'

function useHttp({ defaultValue, httpCallback }) {
  const [data, setData] = useState(defaultValue)
  const [error, setError] = useState(null)

  /* eslint-disable react-hooks/exhaustive-deps */
  const fetchData = useCallback(async () => {
    try {
      const res = await httpCallback()
      setData(res)
    } catch (error) {
      setError(error)
    }
  }, [])

  return [fetchData, data, setData, error]
}

export default useHttp
