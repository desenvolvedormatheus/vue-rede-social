<template>
  <div class="container">
    <header>
      <FeedNavbar></FeedNavbar>
    </header>
    
    <main class="container-main">
      <FeedProfile></FeedProfile>

      <div class="mid">
        <FeedNewPost></FeedNewPost>
        <FeedCardsPosts></FeedCardsPosts>
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
import FeedNewPost from '@/components/feedNewPost.vue';
import FeedCardsPosts from '@/components/FeedCardsPosts.vue';

// API
import { check_session } from '@/services/checksession';

export default {
  components: {
    FeedNavbar,
    FeedProfile,
    FeedNewPost,
    FeedCardsPosts,
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

.mid{
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
