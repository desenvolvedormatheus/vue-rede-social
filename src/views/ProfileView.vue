<template>
    <section class="container-profile">
        <header>
            <FeedNavbar class="feedNavBar"></FeedNavbar>
        </header>

        <main class="container-profile-main">
            <ProfileCardProfileVue></ProfileCardProfileVue>

            <h1>Seus posts</h1>
            
            <ul id="feedPosts" class="feedPosts">
                <li v-for="post in posts" :key="post.post_id">
                    <FeedCardsPosts :user="post.username" :perfil="post.perfil_image" :content="post.content"
                        :post_date="post.post_date" :likes="post.likes">
                    </FeedCardsPosts>
                </li>
            </ul>
        </main>

        <Footer></Footer>

    </section>
</template>

<script>
import FeedNavbar from '@/components/FeedNavbar.vue';
import ProfileCardProfileVue from '@/components/ProfileCardProfile.vue';
import Footer from '@/components/Footer.vue';
import FeedCardsPosts from '@/components/FeedCardsPosts.vue';

export default {
    data() {
        return {
            name: "ProfileView",
            posts: [],
        }
    },
    components: {
        FeedNavbar,
        ProfileCardProfileVue,
        Footer,
        FeedCardsPosts,
    },
    methods: {
    async posts_details() {
        try {
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({ key: 'd6s809afdas89ffdsa7890', user_id: localStorage.user_id })
            };

            const url = 'http://localhost:9000/get_posts.php'

            const response = await fetch(url, options);

            if (!response.ok) {
                console.log('Failed to resposta (GET_POSTS feedview)')
            }

            const data = await response.json();
            this.posts = data

            window.localStorage.posts

        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    },
    mounted() {
        this.posts_details();
    }
}
</script>

<style scoped>
.container-profile {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.container-profile-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
}
.container-profile-main h1{
    width: 800px;
    padding: 1rem;
}
.feedPosts{
    width: 800px;
}
</style>