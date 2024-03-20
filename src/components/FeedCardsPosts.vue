<template>
    <Panel class="panel">
        <template #header>
            <div class="header">
                <Avatar :image="post_user_perfil" shape="circle"></Avatar>
                <span>{{ post_user_name }}</span>
            </div>
        </template>
        <template #icons>
            <span class="hour">{{ post_user_date }}</span>
        </template>
        <p class="text-post" v-html="post_user_text"></p>
        <template #footer>
            <div class="footer">
                <i class="pi pi-heart"><p class="likes">{{ likes }}</p></i>
                <i class="pi pi-bookmark"><p class="favorites">0</p></i>
            </div>
        </template>
    </Panel>
</template>

<script>
import Panel from 'primevue/panel';
import Avatar from 'primevue/avatar';

export default {
    props:{
        user: {
            type: String,
            required: true,
            default: "Usuário"
        },
        perfil: {
            type: String,
            required: true,
            default: "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
        },
        content: {
            type: String,
            required: true,
            default: "Algo de errado com o post, por favor chame a equipe de report do site"
        },
        post_date: {
            type: String,
            required: true,
            default: "00-00-00 00:00:00"
        },
        likes: {
            type: String,
            required: true,
            default: "0"
        }
    },
    data() {
        return {
            name: "FeedCardsPosts",
            post_user_name: this.user,
            post_user_perfil: this.perfil,
            post_user_text: this.content,
            post_user_date: this.post_date,
        }
    },
    components: {
        Panel,
        Avatar,
    }
}
</script>

<style scoped>
.panel{
    margin-top: 1rem;
}
.header {
    display: flex;
    align-items: center;
    gap: 1rem;
}
.hour {
    color: #666666;
}
.text-post {
    text-align: justify;
}
.footer {
    display: flex;
    gap: 1rem;
}
.footer i {
    cursor: pointer;
    display: flex;
    gap: 0.4rem;
}
</style>