<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <QTabs no-caps class="bg-primary text-white shadow-2">
      <QRouteTab label="主页" to="/" exact />
      <QRouteTab label="About" to="/about" exact />
    </QTabs>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
