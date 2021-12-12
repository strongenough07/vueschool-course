<template>
  <div class="hello">
      <h1>Vue 3</h1>
        Username: {{ username }}
        <hr>
        
        <LoginForm 
        v-model:username="username"   
        v-model:password="password"
        />
  </div>
  Password: {{ password }}
</template>

<script>
import LoginForm from "@/components/LoginForm.vue"
export default {
    components: {
        LoginForm
    },
    data() {
        return {
            username: null,
            password: null
        }
    }
}
</script>

<style>

</style>