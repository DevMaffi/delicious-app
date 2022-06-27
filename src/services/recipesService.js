import http from './httpService'
import * as storageService from './storageService'

const params = {
  apiKey: process.env.REACT_APP_API_KEY,
}

export function getRecipes(key, limit) {
  return storageService.getMemorizedData(
    key,
    () =>
      http.get('/random', {
        params: {
          ...params,
          number: limit,
        },
      }),
    'recipes'
  )
}

export function getRecipesByTags(key, limit, tags) {
  return storageService.getMemorizedData(
    key,
    () =>
      http.get('/random', {
        params: {
          ...params,
          number: limit,
          tags: tags.join(','),
        },
      }),
    'recipes'
  )
}

export function getRecipesByCuisine(cuisine) {
  return storageService.getMemorizedData(
    cuisine,
    () =>
      http.get('/complexSearch?', {
        params: {
          ...params,
          cuisine,
        },
      }),
    'results'
  )
}

export async function getRecipesByQuery(query) {
  const { data } = await http.get('/complexSearch', {
    params: {
      ...params,
      query,
    },
  })

  return data.results
}

export async function getDetails(id) {
  const { data } = await http.get(`/${id}/information`, { params })

  return data
}
