<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./views/layouts/Header.vue";

export default {
  name: "home",
  components: {Header},
}
</script>

<style scoped>

</style>
