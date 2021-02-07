const graph = require('./graph')
const hasura = require('./hasura')

hasura.request({
  query: graph.UPSERT_CHECKOUT,
  variables: {
    body: [{a: 'qwe', 'b': 'asd'}]
  }
}).then(response => {
  console.log(response)
}).catch(error => {
  console.error(error)
})
