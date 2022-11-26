<template>
  <navbar />
  <router-view />
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  name: "DefaultLayout",
  components: {Navbar}
}
</script>

<style scoped>

</style>