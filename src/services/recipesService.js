import http from './httpService'

export function getRecipes(limit) {
  return http.get(
    `/random?apiKey=${process.env.REACT_APP_API_KEY}&number=${limit}`
  )
}
