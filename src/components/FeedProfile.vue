<template>
    <div class="profile">
        <img :src="user.imgBackground" alt="image background profile" class="image-background">
        <img :src="user.imgProfile" alt="image profile" class="image-profile">
        <div class="profile-details">
            <div class="info">
                <p>{{ user.name }}</p>
                <p class="description">{{ user.description }}</p>
            </div>
            <hr>
            <div class="info">
                <p>Profile views</p>
                <p>{{ user.profile_views }}</p>
            </div>
            <hr>
            <div class="info">
                <p>Connections</p>
                <p>{{ user.connections }}</p>
            </div>
            <hr>
            <div class="info fakeLink">
                <i class="pi pi-bookmark-fill"></i>
                <p>My itens</p>
            </div>
        </div>
    </div>
</template>

<script>
import { get_users } from '@/services/getusers';

export default {
    data() {
        return {
            name: "FeedProfile",
            user: {
                imgBackground: "https://files.adventistas.org/institucional/pt/sites/26/2023/07/fundo-dng.jpg",
                imgProfile: "https://static.vecteezy.com/ti/vetor-gratis/p1/26619142-padrao-avatar-perfil-icone-do-social-meios-de-comunicacao-do-utilizador-foto-imagem-vetor.jpg",
                name: "not user",
                description: "Not description",
                profile_views: 0,
                connections: 0,
            }
        }
    },
    methods:{
        async user_details(){
            try {
                const session_user = await get_users(false, false, window.localStorage.session_code);
                console.log(session_user[0].user);

                this.user.imgBackground = session_user[0].user.img_background;
                this.user.imgProfile = session_user[0].user.perfil_image;
                this.user.name = session_user[0].user.username;
                this.user.description = session_user[0].user.description;
                this.user.profile_views = session_user[0].user.profile_views;
                this.user.connections = session_user[0].user.connections;
            } catch (error) {
                console.log('Usuario não encontrado');
            }
        }
    },
    mounted(){
        this.user_details()      
    }
}
</script>

<style scoped>
/* Geral */
.profile {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: var(--third-color);
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    max-width: 300px;
}

/* imagens */
.image-background,
.image-profile {
    filter: drop-shadow(0.2rem 0.3rem 0.1rem #00000048);
    height: 90px;
}

.image-profile {
    width: 90px;
    border-radius: 100%;
    position: absolute;
    left: 1rem;
    top: 0.5rem;
}

/* detalhes */
.profile-details {
    padding: 0 1rem;
}

.info {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    gap: 1rem;
    text-align: end;
}

/* extra */
.fakeLink {
    cursor: pointer;
}
</style>
<!-- todas as infos de user{} virão do banco -->