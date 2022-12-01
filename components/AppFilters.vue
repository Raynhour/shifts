<template>
  <section v-if="filtersAvaliable" class="section">
    <UiTitle>Filter</UiTitle>
    <div class="price">
      <span>{{ minPrice }}</span>
      <b-slider 
        v-model="priceRange"
        type="is-primary"
        :min="minPrice" 
        :max="maxPrice"  
        lazy
        small 
        rounded
      >
      </b-slider>
      <span>{{ maxPrice}}</span>
    </div>
      
  </section>
</template>
  
<script>
import {mapGetters} from "vuex"
import { mapFields } from 'vuex-map-fields';


export default {
  data: function() {
    return {
    }
  },

  computed: {
    ...mapFields(['priceRange']),
    ...mapGetters(['maxPrice', 'minPrice' ]),

    filtersAvaliable() {
      return this.maxPrice >= 1 && this.maxPrice > this.minPrice
    }
  },

  watch: {
    maxPrice() {
      this.priceRange[1] = this.maxPrice
    },

    minPrice() {
      this.priceRange[0] = this.minPrice
    }
  }
}
  </script>

<style lang="scss">
.price {
  display: flex;
}
</style>