import createIterator from './createIterator'
import routes from '../routes'

export default new Map(createIterator(function * () {
  for (const item of routes) {
    yield [item.url, item.name]
  }
}))
