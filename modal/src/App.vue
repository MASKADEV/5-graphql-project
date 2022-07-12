<template>
  <div class="container m-3 vh-100 overflow-hidden mx-auto">
    <button @click.prevent="hola">{{ maska }}</button>
    <div
      v-if="show"
      class="position-fixed top-0 start-0 w-100 h-100 bg-secondary d-flex jusitfy-content-cente align-items-center"
    >
      <div
        class="position-relative bg-white px-50 py-100 mx-auto rounded"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maska: "ADD",
      show: false,
    };
  },
  methods: {
    hola() {
      this.show = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
