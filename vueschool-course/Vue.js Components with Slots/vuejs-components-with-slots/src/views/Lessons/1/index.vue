<template>
  <div>
    <AppButton @click="log">
      add to favorites
      <Icon />
    </AppButton>
  </div>
</template>

<script>
import Icon from "./components/Icon.vue";
import AppButton from "./components/AppButton.vue";

export default {
  components: {
    AppButton,
    Icon,
  },
  methods: {
    log() {
      console.log("works");
    },
  },
};
</script>
