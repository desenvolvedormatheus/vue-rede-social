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
  </div>
</template>

<script>
import FeedNavbar from '@/components/FeedNavbar.vue';
import FeedProfile from '@/components/FeedProfile.vue';

// API
import { check_session } from '@/services/checksession';

export default {
  components: {
    FeedNavbar,
    FeedProfile,
  },
  methods: {
    async checkUser(server_session) {
      const session_server = await check_session(server_session);
      try {
        console.log("achou");
        console.log(session_server);
      } catch (error) {
        console.log("não achou");
      }
    },
  },
  mounted() {
    document.getElementById("app").style.margin = '0'
    this.checkUser(window.localStorage.session_code)
  }
}
</script>

<style scoped>
.container {
  width: 100vw;
}

.container-main {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}
</style>
