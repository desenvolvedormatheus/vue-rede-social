<template>
    <section class="container-profile">
        <FeedNavbar class="feedNavBar"></FeedNavbar>

        <main class="container-profile-main">

            <ProfileCardProfileVue></ProfileCardProfileVue>

        </main>

    </section>
</template>

<script>
import FeedNavbar from '@/components/FeedNavbar.vue';
import ProfileCardProfileVue from '@/components/ProfileCardProfile.vue';

export default {
    data() {
        return {
            name: "ProfileView",
        }
    },
    components: {
        FeedNavbar,
        ProfileCardProfileVue,
    }
}
</script>

<style scoped>
.container-profile-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
}
</style>