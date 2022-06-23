import { useState, useEffect } from 'react'

function useHttp({ defaultValue, httpCallback, onError, deps = [] }) {
  const [data, setData] = useState(defaultValue)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await httpCallback()
        setData(res)
      } catch (error) {
        onError(error)
      }
    }

    getData()
  }, deps)

  return { data, setData }
}

export default useHttp
