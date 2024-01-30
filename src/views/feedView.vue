<template>
  <div class="container">
    <header>
      <FeedNavbar></FeedNavbar>
    </header>

    <main class="container-main">
      <FeedProfile></FeedProfile>

      <div class="mid">
        <FeedNewPost></FeedNewPost>
        <ul id="feedPosts">
          <li v-for="post in posts" :key="post.user">
            <FeedCardsPosts
            :user="post.user" 
            :perfil="post.perfil" 
            :content="post.content" 
            :post_date="post.post_date" 
            ></FeedCardsPosts>
          </li>
        </ul>
      </div>

      <div>
        <FeedNews></FeedNews>
      </div>

    </main>
  </div>
</template>

<script>
import { get_users } from '@/services/getusers';
import FeedNavbar from '@/components/FeedNavbar.vue';
import FeedProfile from '@/components/FeedProfile.vue';
import FeedNewPost from '@/components/feedNewPost.vue';
import FeedCardsPosts from '@/components/FeedCardsPosts.vue';
import FeedNews from '@/components/FeedNews.vue';

// API
import { check_session } from '@/services/checksession';

export default {
  data(){
    return{
      posts: [
        {
          user: "ADM",
          perfil: "a",
          post_date: "25-01-08 12:57:00",
          content: "post teste rede v2",
        },
        {
          user: "Helem",
          perfil: "bb",
          post_date: "30-01-08 12:57:00",
          content: "outro post teste rede v2",
        },
        {
          user: "Helem",
          perfil: "bb",
          post_date: "08-01-08 12:57:00",
          content: "outro post teste rede v2",
        },
      ],
      user: {}
    }
  },
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
      } catch (error) {
        console.log("não achou");
      }
    },
    async user_details() {
      try {
        const user_details = await get_users(false, false, window.localStorage.session_code);
        console.log(user_details[0].user);
        this.user = {
          username: user_details[0].user.username,
          username: user_details[0].user.username,
        }
      } catch (error) {
        console.log('Usuario não encontrado');
      }
    }
  },
  mounted() {
    document.getElementById("app").style.margin = '0';
    this.checkUser(window.localStorage.session_code);
    this.user_details();
    console.log(this.user)
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

.mid {
  width: 600px;
  display: flex;
  flex-direction: column;
}
</style>
