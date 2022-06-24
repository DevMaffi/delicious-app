import { useState } from 'react'

function useHttp({ defaultValue, httpCallback }) {
  const [data, setData] = useState(defaultValue)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      const res = await httpCallback()
      setData(res)
    } catch (error) {
      setError(error)
    }
  }

  return [fetchData, data, setData, error]
}

export default useHttp
