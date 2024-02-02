<template>
    <Message :closable="false" icon="pi pi-send" class="container">
        <div class="icon">
            <i class="pi pi-prime"></i>
        </div>
        <template #messageicon>
            <i></i>
        </template>
        <div class="LoginView-form">
            <div class="formWidth">
                <div class="formGroup">
                    <h1>Welcome Back!</h1>
                    <p>If you already have an account, log in!</p>
                </div>
                <FormLogin class="form" v-if="login" />
                <div v-else>
                    <Button label="LOGIN" @click="log()"></Button>
                </div>
            </div>
            <div class="divider">
                <div class="row"></div>
                <p>OR</p>
                <div class="row"></div>
            </div>
            <div class="formWidth">
                <div class="formGroup">
                    <h1>Create Account!</h1>
                    <p>Register on our platform to access all resources!</p>
                </div>
                <FormRegister class="form" v-if="register" />
                <div v-else>
                    <Button label="CREATE" @click="reg()"></Button>
                </div>
            </div>
        </div>
    </Message>
</template>

<script>
import FormLogin from '../components/FormLogin.vue';
import FormRegister from '../components/FormRegister.vue';
import Divider from 'primevue/divider';
import Button from 'primevue/button';
import Message from 'primevue/message';

export default {
    name: "LoginView",
    data() {
        return {
            login: true,
            register: false,
        }
    },
    methods: {
        log() {
            this.register = false;
            this.login = true;
        },
        reg() {
            this.login = false;
            this.register = true;
        }
    },
    components: {
        FormLogin,
        FormRegister,
        Divider,
        Button,
        Message,
    },
    mounted(){
        document.getElementById("app").style.margin = 'auto'
    }
}

</script>

<style scoped>
.container{
    width: 55.7rem;
    margin: auto;
    margin-top: 5rem;
}
.icon{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
}
.pi-prime{
    color: #ffffff;
    font-size: 4rem;
    position: absolute;
    top: -4rem;
}
.LoginView-form {
    display: flex;
    flex-direction: row;
}
.LoginView-form div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.divider {
    margin: 0 3rem;
}

.divider p {
    margin: 2rem 0;
}

.row {
    height: 80%;
    width: 1px;
    border-radius: 10px;
    background: #ffffff;
    opacity: 0.1;
}

.formGroup {
    text-align: center;
    margin-bottom: 1rem;
}
.formWidth{
    width: 22rem;
    height: 25rem;
}

@media only screen and (max-width: 860px) {
    .LoginView-form {
        flex-direction: column;
    }
}
</style>