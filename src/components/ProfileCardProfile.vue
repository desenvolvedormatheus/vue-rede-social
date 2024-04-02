<template>
    <div class="profile">
        <img :src="user.imgBackground" alt="image background profile" class="image-background">
        <img :src="user.imgProfile" alt="image profile" class="image-profile">
        <div class="profile-details">
            <h1>{{ user.name }}</h1>
            <p><strong>Description</strong><br>{{ user.description }}</p>
            <p><strong>City</strong><br>{{ user.city }}</p>
            <p><strong>Profile views</strong><br>{{ user.profile_views }}</p>
            <p><strong>Connections</strong><br>{{ user.connections }}</p>
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
                imgProfile: "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg",
                name: "",
                description: "",
                profile_views: "",
                connections: "",
                city: "",
            },
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

                if (localStorage.city === "null") {
                    this.user.city = 'city empy';
                } else {
                    this.user.city = localStorage.city;
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
        },
        onUpload() {
            alert("subiu")
        }
    },
    mounted() {
        this.user_details()
    },
}
</script>

<style scoped>
.profile {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: var(--third-color);
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    padding-bottom: 1.5rem;
}

/* imagens */
.image-background,
.image-profile {
    filter: drop-shadow(0.2rem 0.3rem 0.1rem #00000048);
    height: 300px;
    width: 800px;
}

.image-profile {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    position: absolute;
    left: 1rem;
    top: 2rem;
}

/* detalhes */
.profile-details {
    display: flex;
    gap: 2rem;
    display: flex;
    padding: 0.5rem 0.5rem;
}

.profile-details p {
    max-width: 20rem;
}
</style>