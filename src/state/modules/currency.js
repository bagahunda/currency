import { ApiFactory } from '@/api/ApiFactory'
const currencyApi = ApiFactory.get('currency')

export const state = {
  currencyList: [],
  currencyFilter: []
}

export const getters = {
  currencyList (state) {
    return state.currencyList
  },

  currencyFilter (state) {
    return state.currencyFilter
  }
}

export const mutations = {
  SET_CURRENCY_LIST (state, payload) {
    state.currencyList = payload
  },

  SET_CURRENCY_FILTER (state, payload) {
    state.currencyFilter = payload
  }
}

export const actions = {
  setCurrencyList ({ commit }, payload) {
    commit('SET_CURRENCY_LIST', payload)
  },

  async setCurrencyFilter ({ commit }, params = {}) {
    let res
    if (params.symbols && params.symbols.includes('All')) {
      res = await currencyApi.get()
    } else {
      res = await currencyApi.getFilter(params)
    }
    const payload = res.data.rates
    commit('SET_CURRENCY_FILTER', payload)
  },

  async getPastRate ({ commit }, payload) {
    const { date, base, symbols } = payload
    const res = await currencyApi.getPast(date, { base, symbols })
    const data = res.data.rates
    commit('SET_CURRENCY_FILTER', data)
  },

  async init ({ commit }) {
    const res = await currencyApi.get()
    const payload = Object.keys(res.data.rates)
    commit('SET_CURRENCY_LIST', payload)
  }
}
