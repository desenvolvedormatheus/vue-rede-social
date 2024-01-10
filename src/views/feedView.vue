<template>
  <h1>Feed</h1>

  <Button label="Logof" severity="warning" @click="logOf()"></Button>
</template>

<script>
import Button from 'primevue/button';

export default {
  components: {
    Button,
  },
  methods: {
    logOf() {
      window.localStorage.removeItem("session_code")
      this.$router.push("/")
    }
  },
  mounted() {
    document.getElementById("app").style.margin = '0'
  }
}
</script>

<style scoped></style>

<style>
#app {
  margin: 0;
}
</style>