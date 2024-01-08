<template>
    <div class="LoginView-FormLogin-Form">
        <h2>LOGIN</h2>
        <InputGroup class="LoginView-FormLogin-Form-inputGroup">
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText placeholder="User" />
        </InputGroup>
        <InputGroup class="LoginView-FormLogin-Form-inputGroup">
            <InputGroupAddon>
                <i class="pi pi-lock"></i>
            </InputGroupAddon>
            <Password v-model="value" :feedback="false" placeholder="Password" />
        </InputGroup>
        <Button label="LOGIN"></Button>
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
            visible() {
                this.login = this.login ? false : true
            }
        }
    },
    components: {
        InputGroup,
        InputGroupAddon,
        InputText,
        Password,
        Button
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
</style>