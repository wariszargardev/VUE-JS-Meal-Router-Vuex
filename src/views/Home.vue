<template>
  <div class="container">
    <router-link :to="{ name:'SearchByLetter', params:{letter}}" v-for="letter in letters" class="btn btn-outline-primary" :key="letter">{{ letter }}</router-link>
  </div>

  <pre>{{ingredients}}</pre>
</template>

<script setup>
import axiosClient from "../axios/axiosClient.js";
import {onMounted, ref} from "vue";

const ingredients= ref([])
const letters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
onMounted(()=>{
  axiosClient.get('/list.php?i=list').then((response) => {
    ingredients.value= response.data
  })

})
</script>

<style scoped>

</style>