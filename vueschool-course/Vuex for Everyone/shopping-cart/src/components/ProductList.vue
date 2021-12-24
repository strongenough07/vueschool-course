<template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li v-for="product in products">
        {{ product.title }} - {{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import store from "../store/index";
import shop from "../api/shop";
export default {
  computed: {
    products() {
      return store.getters.availableProducts;
    },
  },
  created() {
    shop.getProducts((products) => {
      store.commit("setProducts", products);
    });
  },
};
</script>

<style>
</style>