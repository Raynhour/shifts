<template>
  <div class="sidebar">
    <div class="sidebar__section">
      <UiTitle>Create</UiTitle>
    </div>
    <div class="sidebar__section">
      <ValidationObserver ref="form" tag="form">
        <ValidationProvider v-slot="{errors}" rules="required" name="title">
          <b-field label="Title" :type="errors.length ? 'is-danger' : ''" :message="errors[0]">
            <b-input v-model="shift.title" ></b-input>
          </b-field>
        </ValidationProvider>
        <b-field label="Description">
          <b-input v-model="shift.description" maxlength="200" type="textarea"></b-input>
        </b-field>
        <ValidationProvider v-slot="{errors}" rules="required" name="dates">
          <b-field
            label="Dates"
            :type="errors.length ? 'is-danger' : ''" :message="errors[0]"
          >
            <b-datepicker
              v-model="shiftDates"
              icon-right="calendar-today"
              placeholder="Click to select..."
              position="is-top-right"
              multiple
              @input="selectDates">
            </b-datepicker>
          </b-field>
        </ValidationProvider>
        <div>
          <ShiftDateForm
            v-for="(item, index) in shift.dates"
            :key="index"
            :item="item"
            :start-time.sync="item.startTime"
            :end-time.sync="item.endTime"
            :price.sync="item.price"
            :type.sync="item.type"
            class="mt-2 mb-2"
            @click:remove="removeShiftDate(index)"
          />
        </div>
      </ValidationObserver>
      <div class="sidebar__actions">
        <b-button 
          class="mr-2"
          type="is-dark" 
          expanded 
          outlined 
          @click="$emit('click:cancel')" 
        >CANCEL</b-button>
        <b-button 
          v-if="!isEditable"
          type="is-dark"
          expanded 
          @click="create" >ADD</b-button>
        <b-button 
          v-else
          type="is-dark"
          expanded 
          @click="update" >UPDATE</b-button>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import { ValidationProvider, ValidationObserver} from 'vee-validate';
  import { DEFAULT_SHIFT, DEFAULT_SHIFT_DATE } from '~/utils/const'

  
  export default {

    components: {
      ValidationObserver, ValidationProvider
    },
    props: {
      item: {
        type: Object
      }
    },
    data: function() {
      return {
        shiftDates: [],
        shift: DEFAULT_SHIFT()
      }
    },
  
    computed: {
      isEditable() {
        return !!this.item?.title
      }
    },

    created() {
      this.preselect(this.item)
    },
  
    methods: {
      preselect(item) {
        console.log(item)
        this.shift = structuredClone(this.isEditable ? item : DEFAULT_SHIFT())
        this.shiftDates = this.shift.dates.map(date => date.date)
      },
      selectDates(dates) {
        
        this.shiftDates = dates
        if(!this.shift.dates.length) return this.addDates(dates)
        const newDates = dates.filter(date => !this.shift.dates.some(shiftDate => shiftDate.date === date))
        this.shift.dates.forEach((shiftDate, index) => {
          const isDateRemoved = !dates.includes(shiftDate.date)
          if(isDateRemoved)  this.shift.dates.splice(index, 1);
        })
        if(newDates.length) this.addDates(newDates)
       
      },

      addDates(dates) {
        dates.forEach(date => this.shift.dates.push(DEFAULT_SHIFT_DATE(date)))
      },
  
      async create() {
        try {
          const valid = await this.$refs.form.validate()
          if(!valid) throw Error
          this.$emit('click:add', this.shift)
        } catch (error) {
          alert('some fields invalid')
        }
      },

      update() {
        this.$emit('click:update', this.shift)
      },
      
      
     
    }
  }
  </script>
  
  <style lang="scss">
  .sidebar {
    padding-top: 16px;
    padding-bottom: 90px;
    &__section {
      padding-left: 16px;
      padding-right: 16px;
    }
    &__actions {
      z-index: 10;
      position: fixed;
      width: $sidebar-width;
      padding: 16px;
      right: 0;
      background: whitesmoke;
      bottom: 0px;
      display: flex;
    }
  }
  </style>