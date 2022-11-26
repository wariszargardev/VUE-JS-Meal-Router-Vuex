import axiosClient from "../axios/axiosClient.js";

export function searchMeals( {commit} , keyword){
  console.log(keyword)
  axiosClient.get(`search.php?s=${keyword}`).then(({data})=>{
    commit("setSearchedMeals", data.meals)
  })
}