<template>
  <div class="card">
    <header class="card-header">
        <div>
          <UiTitle tag="h3"><slot name="title">{{ title }}</slot></UiTitle>
          <UiTitle tag="h4"><slot name="description">description</slot></UiTitle>
        </div>
        <slot name="header-right"></slot>
      
    </header>
    <div class="card-content">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: 'BuefyCard',
props: {
  title: {
    type: String
  }
},
}
</script>

<style lang="scss">
.card-header {
display: flex;
justify-content: space-between;
padding: 0.75rem 1rem;
}
</style>
