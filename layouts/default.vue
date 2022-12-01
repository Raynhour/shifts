<template>
  <div>
    <div class="layout">
      <div class="container">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style>
html {
  background: #ccc;
  height: 100%;
  min-height: 100vh;
}
</style>
