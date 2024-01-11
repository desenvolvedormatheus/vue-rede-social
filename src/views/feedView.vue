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
    },
    valid_local_session(server_session) {
      try {
        if (server_session === window.localStorage.session_code) {
          console.log('Sessao: '+ window.localStorage.session_code)
        } else {
          console.log('Sessão não iniciada');
          this.$router.push("/notLogin")
        }

      } catch (error) {
        console.log('Erro não identificado');
        this.$router.push("/Error")
      }
    }
  },
  mounted() {
    document.getElementById("app").style.margin = '0'
    this.valid_local_session("659deaa607ac5")
  }
}
</script>

<style scoped></style>
