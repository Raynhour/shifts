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
            @click:cancel="closeSidebar"
            @click:add="addShift"
          />
        </b-sidebar>  
      </div>
      <p>{{ shiftsFiltered }}</p>
    </div>
   
  </section>
  </template>
  
  <script>
  import { mapGetters} from "vuex"
  export default {
    data: function() {
      return {
        show: false,
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

      addShift(item) {
      this.$store.commit('create', item)
      this.closeSidebar()
    },
     
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