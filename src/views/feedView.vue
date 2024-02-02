<template>
  <div class="container">
    <header>
      <FeedNavbar></FeedNavbar>
    </header>

    <main class="container-main">
      <FeedProfile></FeedProfile>

      <div class="mid">
        <FeedNewPost @postSend="posts_details"></FeedNewPost>
        <ul id="feedPosts">
          <li v-for="post in posts" :key="post.post_id">
            <FeedCardsPosts :user="post.username" :perfil="post.perfil_image" :content="post.content"
              :post_date="post.post_date">
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
import FeedNavbar from '@/components/FeedNavbar.vue';
import FeedProfile from '@/components/FeedProfile.vue';
import FeedNewPost from '@/components/feedNewPost.vue';
import FeedCardsPosts from '@/components/FeedCardsPosts.vue';
import FeedNews from '@/components/FeedNews.vue';

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
    async checkUser(session_code) {
      const key = 'd6s809afdas89ffdsa7890'

      try {
        const url = `http://localhost/apiRedeSocial/API/api.php?key=${key}&action=chek_session&session_code=${session_code}`
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to resposta');
        }
        const data = await response.json();
        if(data[0].have){
          console.log("Usuário existente");
        }else{
          console.log("Usuário inexistente");
          this.$router.push("/notLogin");
        }
      } catch (error) {
        console.error(error);
        throw error;
      }

    },
    async posts_details() {
      const key = 'd6s809afdas89ffdsa7890'
      const url = `http://localhost/apiRedeSocial/API/api.php?key=${key}&action=get_posts`

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to resposta')
        }
        const data = await response.json();
        this.posts = data;
      } catch (error) {
        console.error(error);
        throw error;
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
