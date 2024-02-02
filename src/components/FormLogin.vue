<template>
    <div class="LoginView-FormLogin-Form">
        <h2>LOGIN</h2>
        <InputGroup class="LoginView-FormLogin-Form-inputGroup">
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText placeholder="User" v-model="inputUser" />
        </InputGroup>
        <InputGroup class="LoginView-FormLogin-Form-inputGroup">
            <InputGroupAddon>
                <i class="pi pi-lock"></i>
            </InputGroupAddon>
            <Password id="inputPass" :feedback="false" placeholder="Password" v-model="inputPass" />
        </InputGroup>
        <Button id="btnLogin" label="" @click="checkUser(inputUser, inputPass)">LOGIN</Button>
        <p v-show="notUser" class="alert_notUser">Usuário ou senha inválidos!</p>
    </div>
</template>

<script>
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext'
import Password from 'primevue/password';
import Button from 'primevue/button';

export default {
    name: "FormLogin",
    data() {
        return {
            login: false,
            inputUser: '',
            inputPass: '',
            notUser: false,
        }
    },
    components: {
        InputGroup,
        InputGroupAddon,
        InputText,
        Password,
        Button
    },
    methods: {
        async checkUser(inputUser, inputPass) {
            const btnLogin = document.querySelector("#btnLogin");
            btnLogin.setAttribute("disabled", "");
            btnLogin.innerHTML = `<i class="pi pi-spin pi-spinner" style="font-size: 1rem"></i>`

            const key = 'd6s809afdas89ffdsa7890'
            try {
                const url = `http://localhost/apiRedeSocial/API/api.php?key=${key}&action=get_users&user=${inputUser}&pass=${inputPass}`

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to resposta')
                }
                const data = await response.json();
                if (data[0].log === true) {
                    window.localStorage.setItem("session_code", data[0].user.session_code);
                    window.localStorage.setItem("connections", data[0].user.connections);
                    window.localStorage.setItem("description", data[0].user.description);
                    window.localStorage.setItem("img_background", data[0].user.img_background);
                    window.localStorage.setItem("perfil_image", data[0].user.perfil_image);
                    window.localStorage.setItem("profile_views", data[0].user.profile_views);
                    window.localStorage.setItem("profile_views", data[0].user.profile_views);
                    window.localStorage.setItem("profile_views", data[0].user.profile_views);
                    window.localStorage.setItem("user_id", data[0].user.user_id);
                    window.localStorage.setItem("username", data[0].user.username);
                    window.localStorage.setItem("city", data[0].user.city);

                    btnLogin.removeAttribute("disabled");
                    btnLogin.innerHTML = `LOGIN`
                    console.log(data);
                    this.$router.push("/feed");
                } else {
                    this.notUser = true;
                    console.log('Usuario não encontrado');
                    document.querySelector("i").setAttribute("color", "red");
                    btnLogin.removeAttribute("disabled");
                    btnLogin.innerHTML = `LOGIN`
                }
                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
    }
}
</script>

<style scoped>
.LoginView-FormLogin-Form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    width: 20rem;
}

.alert_notUser {
    color: #ff5656;
}
</style>
