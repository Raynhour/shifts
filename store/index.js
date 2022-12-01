import {set} from "vue"
import { getField, updateField } from 'vuex-map-fields';

export const state = () => ({
  shifts: [],
  priceRange: [0, 0]
})

export const getters = {
  getField,
  maxPrice: state => {
    if(!state.shifts.length) return 0
    const maxPricesPerDateList = state.shifts
      .map(shift => Math.max(...shift.dates.map(date => +date.price)))
    return Math.max(...maxPricesPerDateList)
  },
  minPrice: state => {
    if(!state.shifts.length) return 0
    const maxPricesPerDateList = state.shifts
      .map(shift => Math.min(...shift.dates.map(date => +date.price)))
    return Math.min(...maxPricesPerDateList)
  },
  shiftsFiltered: state => {
    return state.shifts.map(shift => {
      const datesInPriceRange = shift.dates
        .filter(item => {
      
          return +item.price >= state.priceRange[0] && +item.price <= state.priceRange[1]
        } )
     
      if(!datesInPriceRange.length) return {...shift, dates: []}
     
      return {...shift, dates: datesInPriceRange}
    })
  }
}

export const mutations = {
  updateField,
  create(state, shift) {
    state.shifts.push(shift)
  },

  deleteBy(shiftIndex) {
    state.shifts.splice(shiftIndex, 1)
  },

  update(state, {index, shift}) {
    set(state.shifts, index, shift)
  },

}