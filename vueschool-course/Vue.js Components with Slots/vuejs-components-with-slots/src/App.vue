<template>
  <AppUserList>
    <template #secondrow="{ item }">
      <a :href="'tel:' + item.phone">{{ item.phone }}</a>
      <br />
      <a :href="'mailto:' + item.email">{{ item.email }}</a>
    </template>
  </AppUserList>
</template>

<script>
// import AppSpinner from "@/components/AppSpinner";
import AppUserList from "@/components/AppUserList";
export default {
  components: {
    AppUserList,
    // AppSpinner,
  },
};
</script>