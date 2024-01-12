<template>
  <div class="container">
    <header>
      <FeedNavbar></FeedNavbar>
    </header>
    <main class="container-main">
      <FeedProfile></FeedProfile>
      
      <div>
        <p>foto perfil - textarea - btn postar</p>
        <hr>
        <div>
          <p>card de post</p>
        </div>
      </div>


      <div>
        <p>Noticias</p>
      </div>

    </main>
    
    <Button label="Logof" severity="warning" @click="logOf()"></Button>
  </div>
</template>

<script>
import Button from 'primevue/button';
import FeedNavbar from '@/components/FeedNavbar.vue';
import FeedProfile from '@/components/FeedProfile.vue';

export default {
  components: {
    Button,
    FeedNavbar,
    FeedProfile,
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
.container-main{
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}
</style>
