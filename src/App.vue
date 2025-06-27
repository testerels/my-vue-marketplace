<template>
  <div>
    <AppNavbar />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<style>
html, body, #app {
  height: 100%;
  min-height: 100vh;
  background: #232526;
  margin: 0;
  padding: 0;
}
#app > div {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  background: none;
}
</style>