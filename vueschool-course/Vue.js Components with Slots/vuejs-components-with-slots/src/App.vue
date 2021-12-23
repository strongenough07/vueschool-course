<template>
  <AppUserList>
    <template #loading>
      <AppSpinner />
    </template>
  </AppUserList>
</template>

<script>
import AppSpinner from "@/components/AppSpinner";
import AppUserList from "@/components/AppUserList";
export default {
  components: {
    AppUserList,
    AppSpinner,
  },
};
</script>