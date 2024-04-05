<template>
    <section class="container-config">
        <header>
            <FeedNavbar></FeedNavbar>
        </header>

        <main class="container-config-main">
            <config-card-edit></config-card-edit>
        </main>

        <Footer></Footer>
    </section>
</template>

<script>
import ConfigCardEdit from '../components/ConfigCardEdit.vue';
import FeedNavbar from '@/components/FeedNavbar.vue';
import Footer from '@/components/Footer.vue';

export default {
    data() {
        return {
            name: "ProfileView",
        }
    },
    components: {
        ConfigCardEdit,
        FeedNavbar,
        Footer,
    }
}
</script>

<style scoped>
    .container-config{
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .container-config-main{
        display: flex;
        justify-content: center;
    }
</style>