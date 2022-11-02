<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";
import NavigationRoute from "./components/NavigationRoute.vue";

export default defineComponent({
  components: {
    NavigationRoute,
  },
});
</script>

<template>
  <div id="app">
    <NavigationRoute />
    <RouterView />
  </div>
</template>

<style>
#app {
  font-family: "Prompt", sans-serif;
  font-family: "Sarabun", sans-serif;
  font-family: "Noto Sans Thai", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
