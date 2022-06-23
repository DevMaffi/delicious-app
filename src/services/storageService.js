import * as recipesService from './recipesService'

export async function getRecipes(key, amount) {
  if (localStorage.getItem(key)) return JSON.parse(localStorage.getItem(key))

  try {
    const {
      data: { recipes },
    } = await recipesService.getRecipes(amount)

    localStorage.setItem(key, JSON.stringify(recipes))
    return recipes
  } catch (error) {
    return Promise.reject(error)
  }
}
