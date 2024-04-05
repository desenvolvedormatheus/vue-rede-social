<template>
    <div class="edit-profile">
        <h1>Edit profile</h1>
        <ul>
            <li>
                <p>Be careful when changing your username and password, You use them to log into the system!</p>
            </li>
            <li class="edit-profile-main">
                <InputText placeholder="Username" class="InputText" v-model="alterUsername" />
            </li>
            <li class="edit-profile-main">
                <InputText placeholder="Password" class="InputText" v-model="alterPassword" />
            </li>
            <li class="edit-profile-main">
                <InputText placeholder="Alter City" class="InputText" v-model="alterCity" />
            </li>
            <li class="edit-profile-main">
                <Editor v-model="alterDescription" placeholder="Alter description" class="InputText">
                    <template v-slot:toolbar>
                        <span class="ql-formats">
                            <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                            <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                            <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                        </span>
                    </template>
                </Editor>
            </li>
            <li>
                <p>Confirm your password!</p>
                <InputText placeholder="Confirm" class="InputText" />
            </li>
            <Button label="Confirm" @click="visible = true"></Button>
        </ul>
    </div>
</template>

<script>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Editor from 'primevue/editor';

export default {

    data() {
        return {
            alterUsername: localStorage.username,
            alterDescription: localStorage.description,
            alterPassword: "",
            alterCity: localStorage.city,
        }
    },
    components: {
        Button,
        InputText,
        Editor,
    },
    methods: {
    }
} 
</script>

<style scoped>
/* Editar perfil */
.edit-profile,
.edit-profile ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 10px;
    color: #af2c2c;
}
.edit-profile {
    border: 1px solid #af2c2c;
}
.InputText {
    width: 23rem;
}
.edit-profile-main {
    display: flex;
    gap: 0.3rem;
    align-items: end;
    border-radius: 0.3rem;
}
</style>