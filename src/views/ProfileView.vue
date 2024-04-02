<template>
    <section class="container-profile">
        <FeedNavbar class="feedNavBar"></FeedNavbar>

        <main class="container-profile-main">

            <ProfileCardProfileVue></ProfileCardProfileVue>
            <div class="card-sobre"></div>
            <div class="card-atividade"></div>

        </main>

    </section>
</template>

<script>
import FeedNavbar from '@/components/FeedNavbar.vue';
import ProfileCardProfileVue from '@/components/ProfileCardProfile.vue';

export default{
    data(){
        return{
            name: "ProfileView",
        }
    },
    components:{
        FeedNavbar,
        ProfileCardProfileVue,
    }
}
</script>

<style scoped>
.container-profile-main{
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 2rem;
    flex-direction: column;
}
</style>