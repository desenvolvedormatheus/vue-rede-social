<template>
  <div class="container">
    <header>
      <FeedNavbar></FeedNavbar>
    </header>

    <main class="container-main">
      <FeedProfile></FeedProfile>

      <div class="mid">
        <FeedNewPost :posts_details="posts_details"></FeedNewPost>
        <ul id="feedPosts">
          <li v-for="post in posts" :key="post.user">
            <FeedCardsPosts :user="post.user" :perfil="post.perfil" :content="post.content" :post_date="post.post_date">
            </FeedCardsPosts>
          </li>
        </ul>
      </div>

      <div>
        <FeedNews></FeedNews>
      </div>

    </main>

    <footer class="feed-container-footer">
      <p><i>By - Matheus Souza</i></p>
    </footer>
  </div>
</template>

<script>
import { get_posts } from '@/services/getposts';
import FeedNavbar from '@/components/FeedNavbar.vue';
import FeedProfile from '@/components/FeedProfile.vue';
import FeedNewPost from '@/components/feedNewPost.vue';
import FeedCardsPosts from '@/components/FeedCardsPosts.vue';
import FeedNews from '@/components/FeedNews.vue';

// API
import { check_session } from '@/services/checksession';

export default {
  data() {
    return {
      posts: [],
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
      try {
        const session_server = await check_session(server_session);
        console.log("Usuário autorizado");
      } catch (error) {
        console.log("Usuário não autorizado");
      }
    },
    async posts_details() {
      try {
        const posts_details = await get_posts();
        this.posts.pop();
        for (let _i = 0; _i < posts_details.length; _i++) {
          this.posts.push(
            {
              user: posts_details[_i].username,
              perfil: posts_details[_i].perfil_image,
              post_date: posts_details[_i].post_date,
              content: posts_details[_i].content,
            },
          )
        }
      } catch (error) {
        console.log('posts não encontrados');
        console.log(error);
      }
    }
  },
  mounted() {
    document.getElementById("app").style.margin = '0';
    this.checkUser(window.localStorage.session_code);
    this.posts_details();
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

.feed-container-footer {
  text-align: center;
  color: var(--primary-color);
  background: var(--third-color);
  padding: 0.3rem;
  margin-top: 1rem;
}
</style>
