<template>
  <div class="container">
    <header>
      <FeedNavTop></FeedNavTop>
    </header>
    <main>
      <p>fundo + foto Perfil + descrição | vizualizações do perfil conexões | posts salvos</p>
      
      <p>foto perfil - textarea - btn postar</p>

      <p>card de post</p>

      <p>Noticias</p>
    </main>
    
    <Button label="Logof" severity="warning" @click="logOf()"></Button>
  </div>
</template>

<script>
import Button from 'primevue/button';
import FeedNavTop from '../components/FeedNavTop.vue';

export default {
  components: {
    Button,
    FeedNavTop,
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

<style scoped>
.container{
  width: 100vw;
}
</style>
