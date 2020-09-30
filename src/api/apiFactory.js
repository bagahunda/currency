import currecyApi from './currencyApi'

const repositories = {
  currency: currecyApi
}

export const ApiFactory = {
  get: name => repositories[name]
}
