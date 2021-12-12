<template>
  <div class="hello">
      <h1>Vue 3</h1>
      <h2>Reactivity</h2>
      {{website}}
      <hr>
      <button @click="addTwitter">Add Twwitter</button>
      <button @click="removeLink">Remove link</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            website: {
                name: 'Vue School',
                link: 'vueschool.io'
            }
        }
    },
    methods: {
        addTwitter() {
             this.website.twitter = '@vueschool_io'
            // this.$set(this.website, 'twitter', '@vueschool_io') vue2
        },
        removeLink() {
             delete this.website.link
            // this.$delete(this.website, 'link') vue2
        }
    } 
}
</script>

<style>

</style>