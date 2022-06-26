import http from './httpService'
import * as storageService from './storageService'

export function getRecipes(key, limit) {
  return storageService.getMemorizedData(
    key,
    () =>
      http.get(
        `/random?apiKey=${process.env.REACT_APP_API_KEY}&number=${limit}`
      ),
    'recipes'
  )
}

export function getRecipesByTags(key, limit, tags) {
  return storageService.getMemorizedData(
    key,
    () =>
      http.get(
        `/random?apiKey=${
          process.env.REACT_APP_API_KEY
        }&number=${limit}&tags=${tags.join(',')}`
      ),
    'recipes'
  )
}

export function getRecipesByCuisine(cuisine) {
  return storageService.getMemorizedData(
    cuisine,
    () =>
      http.get(
        `/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${cuisine}`
      ),
    'results'
  )
}
