<template>
    <section class="container-profile">
        <FeedNavbar class="feedNavBar"></FeedNavbar>

        <main class="container-profile-main">

            <ProfileCardProfileVue></ProfileCardProfileVue>
            <ProfileCardEditVue></ProfileCardEditVue>

        </main>

    </section>
</template>

<script>
import FeedNavbar from '@/components/FeedNavbar.vue';
import ProfileCardProfileVue from '@/components/ProfileCardProfile.vue';
import ProfileCardEditVue from '@/components/ProfileCardEdit.vue'

export default{
    data(){
        return{
            name: "ProfileView",
        }
    },
    components:{
        FeedNavbar,
        ProfileCardProfileVue,
        ProfileCardEditVue,
    }
}
</script>

<style scoped>
.container-profile-main{
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
}
</style>