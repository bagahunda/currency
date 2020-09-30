import axios from 'axios'

const baseDomain = 'https://api.ratesapi.io'
const baseURL = `${baseDomain}/api`

export default axios.create({
  baseURL
})
