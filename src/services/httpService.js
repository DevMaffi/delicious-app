import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500

  if (!expectedError) return console.error('An unexpected error occurred.')

  return Promise.reject(error)
})

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
}

export default httpService
