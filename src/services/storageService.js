export async function getMemorizedData(key, httpCallback, propName) {
  if (localStorage.getItem(key)) return JSON.parse(localStorage.getItem(key))

  try {
    const { data } = await httpCallback()
    const res = propName ? data[propName] : data

    localStorage.setItem(key, JSON.stringify(res))

    return res
  } catch (error) {
    return Promise.reject(error)
  }
}
