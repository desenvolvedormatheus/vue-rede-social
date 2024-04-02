<template>
    <div class="profile">
        <img :src="user.imgBackground" alt="image background profile" class="image-background">
        <img :src="user.imgProfile" alt="image profile" class="image-profile">
        <div class="profile-details">
            <div class="info">
                <p>{{ user.name }}</p>
            </div>
            <div class="info">
                <p>{{ user.description }}</p>
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
                <p>My favorites</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            name: "FeedProfile",
            user: {
                imgBackground: "",
                imgProfile: "",
                name: "",
                description: "",
                profile_views: "0",
                connections: "0",
            }
        }
    },
    methods: {
        async user_details() {
            try {
                if (localStorage.img_background === "null") {
                    this.user.imgBackground = 'https://files.adventistas.org/institucional/pt/sites/26/2023/07/fundo-dng.jpg';
                } else {
                    this.user.imgBackground = localStorage.img_background;
                }

                if (localStorage.perfil_image === "null") {
                    this.user.imgProfile = 'https://static.vecteezy.com/ti/vetor-gratis/p1/26619142-padrao-avatar-perfil-icone-do-social-meios-de-comunicacao-do-utilizador-foto-imagem-vetor.jpg';
                } else {
                    this.user.imgProfile = localStorage.perfil_image;
                }

                if (localStorage.username === "null") {
                    this.user.name = 'usarname not found';
                } else {
                    this.user.name = localStorage.username;
                }

                if (localStorage.description === "null") {
                    this.user.description = 'Not description';
                } else {
                    this.user.description = localStorage.description
                }

                if (localStorage.profile_views === "null") {
                    this.user.profile_views = '0';
                } else {
                    this.user.profile_views = localStorage.profile_views;
                }

                if (localStorage.connections === "null") {
                    this.user.connections = '0';
                } else {
                    this.user.connections = localStorage.connections;
                }

            } catch (error) {
                console.log('Usuario não encontrado');
            }
        }
    },
    mounted() {
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
    width: 300px;
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
    text-align: justify;
}

/* extra */
.fakeLink {
    cursor: pointer;
}
</style>