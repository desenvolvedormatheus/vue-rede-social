<template>
    <div class="profile">
        <img :src="user.imgBackground" alt="image background profile" class="image-background">
        <img :src="user.imgProfile" alt="image profile" class="image-profile">
        <div class="profile-details">
            <div class="details">
                <div class="info-main">
                    <h1>{{ user.name }}</h1>
                    <p class="description"><strong>Description:</strong><br>{{ user.description }}</p>
                    <p><strong>City:</strong><br>{{ user.city }}</p>
                    <p><strong>Profile views:</strong><br>{{ user.profile_views }}</p>
                    <p><strong>Connections:</strong><br>{{ user.connections }}</p>
                </div>
            </div>
            <div class="details">
                <div class="info-main">
                    <h1>Edit profile</h1>
                    <ul>
                        <li class="edit-profile-main">
                            <InputText placeholder="Username" class="InputText" v-model="alterUsername" />
                            <Button label="Alterar" class="btnAlter-main"></Button>
                        </li>
                        <li class="edit-profile-main">
                            <InputText placeholder="Password" class="InputText" v-model="alterPassword" />
                            <Button label="Alterar" class="btnAlter-main"></Button>
                        </li>
                        <li class="edit-profile-description">
                            <Editor v-model="alterDescription" editorStyle="height: 120px" placeholder="Alter description">
                                <template v-slot:toolbar>
                                    <span class="ql-formats">
                                        <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                                        <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                                        <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                                    </span>
                                </template>
                            </Editor>
                            <Button label="Alterar"></Button>
                        </li>
                        <li class="edit-profile-main">
                            <strong>Profile image:</strong>
                            <FileUpload mode="basic" name="prifile_image" url="/api/upload/profile" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />
                        </li>
                        <li class="edit-profile-main">
                            <strong>Background image:</strong>
                            <FileUpload mode="basic" name="prifile_image" url="/api/upload/profile" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />
                        </li>
                        <li class="edit-profile-main">
                            <InputText placeholder="Alter City" class="InputText" v-model="alterCity" />
                            <Button label="Alterar" class="btnAlter-main"></Button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Editor from 'primevue/editor';
import FileUpload from 'primevue/fileupload';

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
            alterUsername: localStorage.username,
            alterDescription: localStorage.description,
            alterPassword: "",
            alterCity: localStorage.city,
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
        onUpload(){
            alert("subiu")
        }
    },
    mounted() {
        this.user_details()
    },
    components: {
        Button,
        InputText,
        Editor,
        FileUpload,
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
    width: 800px;
    padding-bottom: 1.5rem;
}

/* imagens */
.image-background,
.image-profile {
    filter: drop-shadow(0.2rem 0.3rem 0.1rem #00000048);
    height: 200px;
}

.image-profile {
    width: 200px;
    border-radius: 100%;
    position: absolute;
    left: 1rem;
    top: 2rem;
}

/* detalhes */
.profile-details {
    padding: 0 1rem;
    display: flex;
    justify-content: space-around;
}

.details {
    width: 40%;
}

.description {
    text-align: justify;
}

.info-main h1 {
    font-size: 1.5rem;
    padding-top: 1rem;
}

.InputText {
    width: 70%;
}

.btnAlter-main {
    width: 30%;
}

.edit-profile-main {
    display: flex;
    gap: 0.3rem;
    align-items: center;
    justify-content: space-between;
}

.info-main ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.info-main p {
    padding: 0.5rem 0;
}

.edit-profile-description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>