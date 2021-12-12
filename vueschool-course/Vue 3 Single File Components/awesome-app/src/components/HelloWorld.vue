<template>
  <div class="hello">
    <h1 class="username">{{ msg }}</h1>
    <button @click="showUsername = !showUsername">Toogle Username</button>
    <div v-if="showUsername">
      <BigYellowUsername username="danielkellyio" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { defineAsyncComponent } from "vue";
export default {
  name: "HelloWorld",
  components: {
    BigYellowUsername: defineAsyncComponent(() =>
      import(
        /* webpackChunkNane: "BigYellowUsername" */
        "./BigYellowUsername.vue"
      )
    ),
  },
  data() {
    return {
      showUsername: false,
    };
  },
};
</script>
