<template>
    <h1>Erro não identificado!</h1>

    <p>Retorne a pagina de login</p>
    <Button label="LOG IN!" severity="warning" @click="returnLog()"></Button>
</template>

<script>
import Button from 'primevue/button';

    export default{
        data(){
            return{
                name: 'ErrorView'
            }
        },
        components:{
            Button,
        },
        methods:{
            returnLog(){
                this.$router.push("/")
            }
        }
    }
</script>