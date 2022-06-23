import { useState, useEffect } from 'react'

function useHttp({
  defaultValue,
  httpCallback,
  onError,
  propName = null,
  deps = [],
}) {
  const [data, setData] = useState(defaultValue)

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const res = await httpCallback()
        setData(propName ? res.data[propName] : res.data)
      } catch (error) {
        onError(error)
      }
    }

    getRecipes()
  }, deps)

  return { data, setData }
}

export default useHttp
