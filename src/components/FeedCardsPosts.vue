<template>
    <div>
        <Panel>
            <template #header>
                <div class="header">
                    <Avatar :image="post_user_perfil" shape="circle"></Avatar>
                    <span>{{ post_user_nome }}</span>
                </div>
            </template>
            <template #icons>
                <span class="hour">Hora do post</span>
            </template>
            <p class="text-post">{{ post_text }}</p>
            <template #footer>
                <div class="footer">
                    <i class="pi pi-heart"></i>
                    <i class="pi pi-share-alt"></i>
                    <i class="pi pi-bookmark"></i>
                </div>
            </template>
        </Panel>
    </div>
</template>

<script>
import Panel from 'primevue/panel';
import Avatar from 'primevue/avatar';

export default {
    data() {
        return {
            name: "FeedCardsPosts",
            post_user_nome: "usuario",
            post_user_perfil: "https://img.freepik.com/vetores-gratis/panda-bonito-vestindo-sapatos-e-acenando-a-mao-ilustracao-vetorial-icone-dos-desenhos-animados-natureza-animal-isolada_138676-4982.jpg?w=740&t=st=1701966302~exp=1701966902~hmac=fa5a0ab00dd8947866f556ae831d98cc54aaff3c1e9387f20ca91a869b25cd85",
            post_text: "Textinho do post Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi error nobis repudiandae? Quos porro laborum in fugiat necessitatibus saepe aut, laboriosam rerum? Amet facilis doloremque iste quaerat optio laboriosam reprehenderit.",
        }
    },
    components: {
        Panel,
        Avatar,
    }
}
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.text-post {
    text-align: justify;
}

.footer {
    display: flex;
    gap: 1rem;
}
.footer i{
    cursor: pointer;
}
.hour {
    color: #666666;
}</style>