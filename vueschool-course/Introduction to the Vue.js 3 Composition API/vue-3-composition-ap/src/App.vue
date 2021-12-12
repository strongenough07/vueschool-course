<template>
  <h1>
    {{ name }}
  </h1>
  <input type="text" v-model="name" />
  <button @click="placeOrder">Place Order</button>
  <button @click="removeWatcher">Hide Cart All</button>
  <br /><br />
  <select v-model="currencySymbol">
    <label for="currencySymbol">currencySymbol</label>
    <option value="$">Dollars ($)</option>
    <option value="€">Euro (€)</option>
  </select>
  <YummyMeal
    v-for="meal in meals"
    :name="meal.name"
    :price="meal.price"
    @addToCart="addItemToCart"
  />
</template>

<script setup>
import YummyMeal from "./components/YummyMeal.vue";
import { ref, reactive, watch, provide, onMounted } from "vue";
const currencySymbol = ref("$");
// provide("currencySymbol", currencySymbol);

const name = ref("The Snazzy Burger");
const cart = reactive([]);
const meal = reactive({ name: "Hamburger", price: 5 });
const meals = reactive([
  { name: "Hamburger", price: 5 },
  { name: "Cheeseburger", price: 6 },
  { name: "Impossible Burger", price: 7 },
  { name: "Fries", price: 2 },
]);
const placeOrder = () => {
  alert("You're order has been placed!");
};
const addItemToCart = (item) => cart.push(item);
const removeWatcher = watch([() => [...cart]], (newValue, oldValue) =>
  alert(newValue.join("\n"))
);
onMounted(() => {
  console.log(name.value);
});
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
