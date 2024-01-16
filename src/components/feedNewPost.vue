<template>
    <div class="container-new-post">
        <form @submit="onSubmit">
            <Editor v-model="textPost" editorStyle="height: 100px" aria-describedby="editor-error">
                <template v-slot:toolbar>
                    <span class="ql-formats">
                        <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                        <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                        <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                    </span>
                </template>
            </Editor>
            <div class="btn-submit">
                <Button type="submit" label="Submit"></Button>
                <small class="alert p-error" v-show="errorPost">Cannot be empty!</small>
                <small class="alert p-sucess" v-show="sucessPost">Shared!</small>
            </div>
        </form>
    </div>
</template>

<script>
import Editor from 'primevue/editor';
import Button from 'primevue/button';

export default {
    data() {
        return {
            name: "FeedNewPost",
            textPost: "Share something!",
            errorPost: false,
            sucessPost: false,
        }
    },
    components: {
        Editor,
        Button,
    },
    methods: {
        onSubmit() {
            if(this.textPost === ""){
                this.errorPost = true;
                this.sucessPost = false;
            }else{
                this.sucessPost = true;
                this.errorPost = false;
            }
        }
    }
}
</script>

<style scoped>
.container-new-post {
    display: flex;
    flex-direction: column;
    background: var(--third-color);
    padding: 1rem;
    border-radius: 10px;
}
.container-new-post h1{
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
}
.btn-submit{
    display: flex;
    margin-top: 1rem;
    justify-content: space-between;
    align-items: center;
}
.p-sucess{
    color: var(--primary-color);
}
.p-error{
    color: var(--secondary-color);
}
.alert{
    font-size: 1.1rem;
}
</style>