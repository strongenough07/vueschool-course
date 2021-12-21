<template>
  <div id="app">
    <UserAvatar />

    <!-- <h1>User Card</h1>
    <div class="center">
      <UserCard
        :user="user"

          ><strong>{{ user.bio }}</strong></template
        >
      </UserCard>
    </div> -->
  </div>
</template>

<script>
// import UserCard from './components/user-card';
import UserAvatar from "./components/user-avatar.vue";
export default {
  name: "App",

  components: {
    // UserCard,
    UserAvatar,
  },
};
</script>