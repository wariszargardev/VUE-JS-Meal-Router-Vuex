<template>
  <div class="container pt-3">
    <input class="form-control form-control-lg"
           v-model="keyWord"
           type="text"
           @change="searchMeal"
           placeholder="Search for meal">

    <br/>
    <div class="row">
      <div v-for="meal of meals" :key="meal" class="col-lg-4 mb-3" >
      <div class="card" style="width: 100%">
        <img :src="meal.strMealThumb" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">{{ meal.strMeal }}</h5>
          <p class="card-text">
            {{ meal.strInstructions }}
          </p>
        </div>
        <div class="card-body">
          <a :href="meal.strYoutube" target="_blank" class="card-link btn btn-outline-danger">Youtube</a>
          <a href="#" class="float-end card-link btn btn-outline-warning">Another link</a>
        </div>
      </div>
    </div>
    </div>
  </div>

</template>
<script setup>

import {computed, ref} from "@vue/reactivity";

import store from "../store/index.js";

const keyWord= ref('')
const meals = computed(() => store.state.searchedMeals);

function searchMeal(e){
  e.preventDefault()
  store.dispatch('searchMeals', keyWord.value)
}

console.log(store.state)
</script>

<style scoped>
.card-text{
  display: -webkit-box;
  max-width: 200px;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>