<template functional>
  <component :is="props.tag" class="ui-title"> 
    <slot></slot>
  </component>
  </template>
  
  <script>
  export default {
    props: {
      tag: {
        type: String,
        default: 'h2'
      }
    }
  }
  </script>
  
  <style lang="scss">
  .ui-title {
    color: $text;
    @at-root {
      h2#{&} {
        font-size: 34px;
        font-weight: 700;
      }
      h3#{&} {
        font-size: 28px;
        font-weight: 700;
      }
      h4#{&} {
        font-size: 20px;
        font-weight: 500;
      }
    }
  }
</style>