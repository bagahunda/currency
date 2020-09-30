<template>
  <div class="flex flex-col min-h-screen font-sans">
    <app-sprite />
    <app-header />
    <main class="flex-grow p-4">
      <h1 class="font-bold text-xl">Exchange Rates</h1>
      <div class="flex flex-col max-w-xl mt-4 md:flex-row">
        <div class="flex flex-col flex-grow p-2">
          <label class="mb-1">Base</label>
          <multiselect
            v-if="currencyList.length"
            v-model="currency"
            :options="currencyList"
            :searchable="false"
            :show-labels="false"
            :preselect-first="true"
            placeholder="Pick a value"
          />
        </div>
        <div class="flex flex-col flex-grow p-2">
          <label class="mb-1">Filter</label>
          <multiselect
            v-if="currencyList.length"
            v-model="filter"
            :options="currencyList"
            :searchable="false"
            :multiple="true"
            :close-on-select="false"
            :show-labels="false"
            placeholder="Pick a value"
          />
        </div>
      </div>
      <div class="flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flxe-row xl:flex-row mt-4 ml-2">
        <app-table
          :columns="tableColumns"
          :tableData="normCurrencyFilter"
          class="max-w-screen-md md:mr-4"
        />
        <datepicker v-model="date" :inline="true" format="yyyy MM dd" :disabled-dates="disabledDates" class="mb-4 md:mb-0"></datepicker>
      </div>
    </main>
    <app-footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import getSymbolFromCurrency from 'currency-symbol-map'
import AppSprite from './components/AppSprite.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppTable from './components/AppTable.vue'
import Multiselect from 'vue-multiselect'
import Datepicker from 'vuejs-datepicker'
export default {
  name: 'homePage',

  components: {
    AppSprite,
    AppHeader,
    AppFooter,
    AppTable,
    Multiselect,
    Datepicker
  },

  data() {
    return {
      currency: '',
      filter: [],
      date: new Date(),
      tableColumns: [
        {title: 'Icon', key: 'icon'},
        {title: 'Currency', key: 'currency'},
        {title: 'Value', key: 'value'}
      ],
      disabledDates: {
        from: new Date()
      }
    }
  },

  computed: {
    ...mapGetters({
      currencyList: 'currency/currencyList',      
      currencyFilter: 'currency/currencyFilter'
    }),

    normCurrencyFilter() {
      return Object.keys(this.currencyFilter).map(item => {
        return {
          icon: getSymbolFromCurrency(item).toLowerCase(),
          currency: item,
          value: this.currencyFilter[item]
        }
      })
    }
  },

  watch: {
    currency() {
      this.setCurrencyFilter({ base: this.currency, symbols: this.filter.join(',') })
    },
    filter() {
      this.setCurrencyFilter({ base: this.currency, symbols: this.filter.join(',') })
    },
    date(newVal) {
      const date = new Date(newVal)
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const normMonth = month < 10 ? `0${month}` : month
      const day = date.getDate()
      const normDay = day < 10 ? `0${day}` : day
      const dateString = `${year}-${normMonth}-${normDay}`
      this.getPastRate({date: dateString, base: this.currency, symbols: this.filter.join(',') })
    }
  },

  methods: {
    ...mapActions({
      setCurrencyFilter: 'currency/setCurrencyFilter',
      getPastRate: 'currency/getPastRate'
    })
  }
};
</script>

<style>

</style>