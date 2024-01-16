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
        <FeedCardsPosts></FeedCardsPosts>
        <FeedCardsPosts></FeedCardsPosts>
        <FeedCardsPosts></FeedCardsPosts>
      </div>

      <div>
        <FeedNews></FeedNews>
      </div>

    </main>
  </div>
</template>

<script>
import FeedNavbar from '@/components/FeedNavbar.vue';
import FeedProfile from '@/components/FeedProfile.vue';
import FeedNewPost from '@/components/feedNewPost.vue';
import FeedCardsPosts from '@/components/FeedCardsPosts.vue';
import FeedNews from '@/components/FeedNews.vue';

// API
import { check_session } from '@/services/checksession';

export default {
  components: {
    FeedNavbar,
    FeedProfile,
    FeedNewPost,
    FeedCardsPosts,
    FeedNews,
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
  padding-right: 0.7rem;
}

.container-main {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}

.mid {
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
