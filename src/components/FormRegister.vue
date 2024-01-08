
<template>
    <div class="LoginView-FormRegister-Form">
        <h2>Register</h2>
        <InputGroup class="LoginView-FormRegister-Form-inputGroup">
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText placeholder="User" />
        </InputGroup>
        <InputGroup class="LoginView-FormRegister-Form-inputGroup">
            <InputGroupAddon>
                <i class="pi pi-lock"></i>
            </InputGroupAddon>
            <Password v-model="value" :feedback="false" placeholder="Password" />
        </InputGroup>
        <InputGroup class="LoginView-FormRegister-Form-inputGroup">
            <InputGroupAddon>
                <i class="pi pi-lock"></i>
            </InputGroupAddon>
            <Password v-model="value" :feedback="false" placeholder="Confirm password" />
        </InputGroup>
        <Button label="CREATE"></Button>
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
.LoginView-FormRegister-Form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    width: 20rem;
}
</style>