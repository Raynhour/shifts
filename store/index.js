
export const state = () => ({
  shifts: [],
})

export const getters = {
  shiftsFiltered: state => state.shifts
}

export const mutations = {
  create(state, shift) {
    state.shifts.push(shift)
  },

  deleteBy(shiftIndex) {
    state.shifts.splice(shiftIndex, 1)
  },

}