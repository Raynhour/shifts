<template>
  <div class="shift-date-form">
    <div class="shift-date-form__header">
      <h3>{{ date }} </h3>
      <b-icon
        icon="close"
        size="is-small"
        @click.native="remove">
      </b-icon>
    </div>
    <div class="shift-date-form__body">
      <div class="columns">
        <div class="column">
          <b-field label="Starttime" >
            <b-timepicker
              :value="item.startTime"
              placeholder="8:00"
              icon-right="clock"
              @input="updateField('startTime', $event)" />
          </b-field>
        </div>
        <div class="column">
          <b-field label="Endtime"   >
            <b-timepicker
              :value="item.endTime"
              placeholder="15:00"
              icon-right="clock"
              @input="updateField('endTime', $event)" />
          </b-field>
        </div>
        <div class="column">
          <b-field label="Price"  >
            <b-input
              :value="item.price"
              @input="updateField('price', $event)"
            />
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-field label="Type">
              <b-select 
                :value="item.type"
                placeholder="Select a type"
                expanded
                @input="updateField('type', $event)"
              >
                  <option
                    v-for="option in $options.SHIFT_TYPES_LIST"
                    :key="option.value"
                    :value="option.value">
                    {{ option.label }}
                  </option>
              </b-select>
          </b-field>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import {SHIFT_TYPES_LIST} from "@/utils/const"
  import { dateFormatted } from "~/utils/dateHelpers"
  
  
  export default {
    props: {
      item: {
        required: true,
        type: Object
      }
    },
  
    computed: {
      date() {
        return dateFormatted(this.item.date)
      },
    },
  
    methods: {
      updateField(field, val) {
        this.$emit(`update:${field}`, val)
      },
  
      remove() {
        this.$emit('click:remove')
      }
    },
    SHIFT_TYPES_LIST
  }
  </script>
  
  <style lang="scss">
  .shift-date-form {
    &__header {
      display: flex;
      justify-content: space-between;
      vertical-align:middle;
    }
    &__body {
      background: $bg-dark;
      padding: 8px;
    }
    h3 {
      color: #000;
      font-size: 14px;
    }
    .label {
      color: #fff;
    }
  }
  </style>