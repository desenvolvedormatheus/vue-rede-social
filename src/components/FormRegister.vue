
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
        <Button id="btnCreate" label="" @click="checkUser(inputUser, inputPass)">CREATE</Button>
        <p id="alert" v-show="alertShow">{{ alert }}</p>
        <p id="alertCreate" v-show="alertShowCreate">Usuário criado!</p>
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
            alertShow: false,
            alert: 'a',
            alertShowCreate: false,
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
            const btnCreate = document.querySelector("#btnCreate");
            btnCreate.setAttribute("disabled", "");
            btnCreate.innerHTML = `<i class="pi pi-spin pi-spinner" style="font-size: 1rem"></i>`

            // checar confirmação de senha
            if(this.inputPassConform === this.inputPass){
                try {
                    const user = await set_users(inputUser, inputPass);
                    console.log(user);
                    if(user.have === 'true'){
                        this.alertShowCreate = false
                        this.alertShow = true
                        this.alert = 'Usuário já existe!'
                        btnCreate.removeAttribute("disabled");
                        btnCreate.innerHTML = `CREATE`
                    }else if (user.have === 'new'){
                        this.alertShowCreate = true
                        this.alertShow = false
                        btnCreate.removeAttribute("disabled");
                        btnCreate.innerHTML = `CREATE`
                    }else if (user.have === 'empy'){
                        this.alertShowCreate = false
                        this.alertShow = true
                        this.alert = 'Usuário ou senha não podem estar vazios!'
                        btnCreate.removeAttribute("disabled");
                        btnCreate.innerHTML = `CREATE`
                    }
                } catch (error) {
                    console.log('erro, contate o administrador! ' + error);
                    this.alertShowCreate = false
                    this.alertShow = true
                    this.alert = 'contate o administrador!'
                    btnCreate.removeAttribute("disabled");
                    btnCreate.innerHTML = `CREATE`
                }
            }else{
                this.alertShow = true,
                this.alert = 'Senhas não conferem!'
                btnCreate.removeAttribute("disabled");
                btnCreate.innerHTML = `CREATE`
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
#alert{
    color: var(--secondary-color);
}
#alertCreate{
    color: var(--primary-color);
}
</style>
