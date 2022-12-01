<template>
  <div class="shift-date p-3">
    <div class="shift-date__item">{{ date }}</div>
    <div class="shift-date__item">
      <span class="mr-5">{{ startTime }}</span>       
      <span>{{ endTime }}</span> 
  </div>
    <div class="shift-date__item">{{ item.type }}</div>
    <div class="shift-date__item shift-date__item_large text-right">€{{ item.price }}</div>
  </div>
  </template>
  
  <script>
  import { dateFormatted, timeFormatted } from '~/utils/dateHelpers';
  
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
      startTime() {
        return timeFormatted(this.item.startTime)
      },
      endTime() {
        return timeFormatted(this.item.endTime)
      }
    }
  }
  </script>
  
  <style lang="scss">
  .shift-date {
    background: $dark;
    display: flex;
    align-items: center;
    color: #fff;
    border-radius: 8px;
    &__item {
      width: 20%;
      &_large {
        width: 40%;
      }
    }
  }
  </style>