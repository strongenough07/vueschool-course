<template>
  <div id="app">
    <ListWrapper listType="ul">
      <li>Wonder Woman</li>
      <li>Batman</li>
      <li>Superman</li>
      <li>Aquaman</li>
    </ListWrapper>
    <ListWrapper listType="ol">
      <li>Wonder Woman</li>
      <li>Batman</li>
      <li>Superman</li>
      <li>Aquaman</li>
    </ListWrapper>

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
import ListWrapper from "./components/list-wrapper.vue";
export default {
  name: "App",

  components: {
    // UserCard,
    ListWrapper,
  },
};
</script>