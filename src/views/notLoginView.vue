<template>
    <h1>Voce não está logado!</h1>

    <Button label="LOG IN!" severity="warning" @click="returnLog()"></Button>
</template>

<script>
import Button from 'primevue/button';

    export default{
        data(){
            return{
                name: 'notLoginView'
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
