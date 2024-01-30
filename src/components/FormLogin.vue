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
        <p v-show="notUser" class="alert_notUser">Usuário não encontrado!</p>
    </div>
</template>

<script>
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext'
import Password from 'primevue/password';
import Button from 'primevue/button';

// API
import { get_users } from '@/services/getusers';

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
            
            try {
                const user = await get_users(inputUser, inputPass);
                console.log(user[0]);
                if(user[0].log === 'true'){
                    window.localStorage.setItem("session_code", user[0].user.session_code);
                    window.localStorage.setItem("user_id", user[0].user.user_id);
                    btnLogin.removeAttribute("disabled");
                    btnLogin.innerHTML = `LOGIN`
                    this.$router.push("/feed");
                }
            } catch (error) {
                this.notUser = true;
                console.log('Usuario não encontrado');
                document.querySelector("i").setAttribute("color", "red");
                btnLogin.removeAttribute("disabled");
                btnLogin.innerHTML = `LOGIN`
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
.alert_notUser{
    color: #ff5656;
}
</style>
