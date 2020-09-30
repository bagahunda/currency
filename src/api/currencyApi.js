import Client from './client'

const resource = '/latest'

export default {
  get () {
    return Client.get(`${resource}`)
  },

  getPast (date, params) {
    return Client.get(`/${date}`, { params })
  },

  getFilter (params) {
    return Client.get(resource, { params })
  }
}
