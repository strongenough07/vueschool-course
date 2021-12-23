<template>
  <AppLayout>
    <template #header>Slots are awesome</template>
    <template #default>
      <AppButton @click="log">
        <AppIcon name="heart" />
        add to favorites
      </AppButton>
    </template>
  </AppLayout>
</template>

<script>
import AppLayout from "@/components/AppLayout";
import AppButton from "@/components/AppButton";
import AppIcon from "@/components/AppIcon";
export default {
  components: {
    AppButton,
    AppIcon,
    AppLayout,
  },
  methods: {
    log() {
      console.log("works");
    },
  },
};
</script>

<style>
</style>