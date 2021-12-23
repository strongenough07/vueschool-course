<template>
  <AppUserList>
    <template #secondrow="{ remove, item: user }">
      <AppButton @click="remove(user)">{{ user.name.first }}</AppButton>
    </template>
  </AppUserList>
</template>

<script>
// import AppSpinner from "@/components/AppSpinner";
import AppUserList from "@/components/AppUserList";
import AppButton from "@/components/AppButton";
export default {
  components: {
    AppUserList,
    AppButton,
    // AppSpinner,
  },
};
</script>