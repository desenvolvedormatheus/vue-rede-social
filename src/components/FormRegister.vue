
<template>
    <div class="LoginView-FormRegister-Form">
        <h2>Register</h2>
        <InputGroup class="LoginView-FormRegister-Form-inputGroup">
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText placeholder="User" v-model="inputUser"/>
        </InputGroup>
        <InputGroup class="LoginView-FormRegister-Form-inputGroup">
            <InputGroupAddon>
                <i class="pi pi-lock"></i>
            </InputGroupAddon>
            <Password :feedback="false" placeholder="Password" v-model="inputPass"/>
        </InputGroup>
        <InputGroup class="LoginView-FormRegister-Form-inputGroup">
            <InputGroupAddon>
                <i class="pi pi-lock"></i>
            </InputGroupAddon>
            <Password :feedback="false" placeholder="Confirm password" v-model="inputPassConform"/>
        </InputGroup>
        <Button label="CREATE" @click="checkUser(inputUser, inputPass)"></Button>
    </div>
</template>

<script>
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext'
import Password from 'primevue/password';
import Button from 'primevue/button';

// API
import { set_users } from '@/services/setusers';

export default {
    name: "FormLogin",
    data() {
        return {
            inputUser: '',
            inputPass: '',
            inputPassConform: '',
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

            // checar confirmação de senha

            console.log(inputUser, inputPass)
            try {
                const user = await set_users(inputUser, inputPass);
                console.log(user);
                if(user.have === true){
                    this.$router.push("/feed")
                }
            } catch (error) {
                console.log('erro, contate o administrador! ' + error);
            }
        }
    }
}
</script>

<style scoped>
.LoginView-FormRegister-Form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    width: 20rem;
}
</style>