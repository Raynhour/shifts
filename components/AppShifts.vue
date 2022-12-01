<template>
  <section class="section shifts">
    <div class="shifts__header">
      <UiTitle>Shifts</UiTitle>
      <div>
        <b-button type="is-dark" @click="toggle">ADD SHIFT</b-button>
        <b-sidebar
          v-model="show"
          type="is-light"
          :can-cancel="false"
          fullheight
          right
        >
          <ShiftCRUD
            v-if="show"
            :item="selectedShift"
            @click:cancel="closeCRUD"
            @click:add="addShift"
            @click:update="updateShift"
          />
        </b-sidebar>  
      </div>
    </div>
    <UiCard 
      v-for="(shift, index) in shiftsFiltered" :key="index"
      class="my-2"
    >
      <template #title>{{ shift.title }}</template>
      <template #description>{{ shift.description }}</template>
      <template #header-right>
        <b-icon
          class="cursor-pointer"
          icon="pencil"
          size="is-medium"
          @click.native="edit($store.state.shifts[index], index)">
        </b-icon>
      </template>
      <slot>
        <UiTitle tag="h3">Dates</UiTitle>
        <div v-if="!shift.dates.length">Please, change the price to see dates</div>

        <ShiftDate v-for="(item, dateIndex) in shift.dates" :key="dateIndex" :item="item" class="my-2" />
        
      </slot>
    </UiCard>
  </section>
  </template>
  
  <script>
import { mapGetters} from "vuex"
import { DEFAULT_SHIFT } from "~/utils/const"

export default {
    data: function() {
    return {
      show: false,
      selectedShift: {...DEFAULT_SHIFT(), index: null}
    }
  },

  computed: {
    ...mapGetters(['shiftsFiltered']),
  },

  methods: {
    toggle() {
      this.show = !this.show
    },
    open() {
      this.show = true
    },
    closeSidebar() {
      this.show = false
    },

    closeCRUD() {
      this.closeSidebar()
      this.resetSelectedShift()
    },

    resetSelectedShift() {
      this.selectedShift = {...DEFAULT_SHIFT(), index: null}
    },

    edit(item, index) {
      for(const field in item) {
        if(field in this.selectedShift) this.selectedShift[field] = item[field]
      }
      this.selectedShift.index = index
      this.open()
    },

    addShift(item) {
      this.$store.commit('create', item)
      this.closeCRUD()
    },

    updateShift(item) {
      this.$store.commit('update', {shift: item , index: this.selectedShift.index })
      this.closeCRUD()
    }
   
  }
}
</script>
  
<style lang="scss">
  .shifts {
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>