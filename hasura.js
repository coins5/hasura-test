// Solo ejemplo, ese despachador maneja el token del usuario
const userDispatcher = require('../dispatchers/userDispatcher')
const SERVER = 'https://...'

function getHeaders () {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  // headers.append('x-hasura-admin-secret', '123457')

  const token = userDispatcher.getToken()
  if (token) {
    headers.append('Authorization', `Bearer ${token}`)
  }
  return headers
}

export const request = ({ query = '', variables = {} }) => {
  const graphql = JSON.stringify({ query, variables })
  const requestOptions = {
    method: 'POST',
    headers: getHeaders(),
    body: graphql,
    redirect: 'follow'
  }

  return fetch(SERVER, requestOptions)
    .then(response => response.json())
    .catch(error => {
      // eslint-ignore-next-line
      console.log('GRAPH error', error)
    })
}
