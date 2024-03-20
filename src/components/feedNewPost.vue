<template>
    <div class="container-new-post">
        <form @submit="onSubmit">
            <p class="title-new-post">New post</p>
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
                <small class="alert p-error" v-show="errorPost">{{ textError }}</small>
                <small class="alert p-sucess" v-show="sucessPost">Shared!</small>
            </div>
        </form>
    </div>
</template>

<script>
import Editor from 'primevue/editor';
import Button from 'primevue/button';

export default {
    props:{
        getposts: {
            type: Function,
        },
    },
    data() {
        return {
            name: "FeedNewPost",
            textPost: "",
            textError: "",
            errorPost: false,
            sucessPost: false,
        }
    },
    components: {
        Editor,
        Button,
    },
    methods: {
        async onSubmit() {
            if (this.textPost === "") {
                this.errorPost = true;
                this.textError = "Cannot be empty!"
                this.sucessPost = false;
            } else {
                try {

                    const options = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        body: new URLSearchParams({ key: 'd6s809afdas89ffdsa7890', user_id: localStorage.user_id, content: this.textPost })
                    };

                    const url = 'http://localhost:9000/set_post.php';

                    const response = await fetch(url, options);

                    if (!response.ok) {
                        throw new Error('Failed to resposta');
                    }

                    const data = await response.json();
                    if(data){
                        this.sucessPost = true;
                        this.errorPost = false;
                        this.$emit("postSend");
                        this.textPost = "";
                        this.getposts();
                        
                    }else{
                        this.errorPost = true;
                        this.textError = "Erro[QRY_001], Contate o administrador!";
                    }
                    
                } catch (error) {
                    console.error(error);
                    throw error;
                }
            }
        }
    }
}
</script>

<style scoped>
.title-new-post {
    margin: 0 0 0.5rem 0.3rem;
    font-size: 1.3rem;
}

.container-new-post {
    display: flex;
    flex-direction: column;
    background: var(--third-color);
    padding: 1rem;
    border-radius: 10px;
}

.container-new-post h1 {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
}

.btn-submit {
    display: flex;
    margin-top: 1rem;
    justify-content: space-between;
    align-items: center;
}

.p-sucess {
    color: var(--primary-color);
}

.p-error {
    color: var(--secondary-color);
}

.alert {
    font-size: 1.1rem;
}
</style>