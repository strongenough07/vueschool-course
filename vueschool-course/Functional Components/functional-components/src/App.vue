<template>
  <div id="app">
    <h1>User Card</h1>
    <div class="center">
      <UserCard
        :user="user"
        @click.native="nameAlert(user.name)"
        @contact="contactUser(user.name)"
      >
        <strong>{{ user.bio }}</strong>
      </UserCard>
    </div>
  </div>
</template>

<script>
import UserCard from "./components/user-card.vue";
export default {
  components: {
    UserCard,
  },
};
</script>