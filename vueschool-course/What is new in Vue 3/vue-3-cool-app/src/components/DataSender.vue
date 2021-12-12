<template>
  <div>
    <button @click="sendData">Send Data</button>
  </div>
</template>

<script>
export default {
  emits: {
    'sending-start': null, 
  'sending-complete' (payload) {
    return !!(typeof payload.duration === 'number' && payload.response);
  }
  },
  methods: {
    sendData() {
      this.$emit("sending-start");

      this.$emit("sending-complete", {
        duration: 2,
        response: 'how are you'
      });
    },
  },
};
</script>

<style></style>
