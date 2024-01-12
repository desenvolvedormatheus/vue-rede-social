<template>
    <div class="profile">
        <img :src="user.imgBackground" alt="image background profile" class="image-background">
        <img :src="user.imgProfile" alt="image profile" class="image-profile">
        <div class="profile-details">
            <div class="info">
                <p>{{ user.name }}</p>
                <p class="description">{{ user.description }}</p>
            </div>
            <hr>
            <div class="info">
                <p>Profile views</p>
                <p>{{ user.profile_views }}</p>
            </div>
            <hr>
            <div class="info">
                <p>Connections</p>
                <p>{{ user.connections }}</p>
            </div>
            <hr>
            <div class="info fakeLink">
                <i class="pi pi-bookmark-fill"></i>
                <p>My itens</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "FeedProfile",
            user: {
                imgBackground: "https://media.licdn.com/dms/image/D4D16AQE6bB1SkB52AQ/profile-displaybackgroundimage-shrink_350_1400/0/1703595584443?e=1710374400&v=beta&t=3xz2Sa5n62aqN2FsMPzWZpHLJRqCVMJQYXLsyr0xoes",
                imgProfile: "https://img.freepik.com/vetores-gratis/panda-bonito-vestindo-sapatos-e-acenando-a-mao-ilustracao-vetorial-icone-dos-desenhos-animados-natureza-animal-isolada_138676-4982.jpg?w=740&t=st=1701966302~exp=1701966902~hmac=fa5a0ab00dd8947866f556ae831d98cc54aaff3c1e9387f20ca91a869b25cd85",
                name: "Matheus",
                description: "Desenvolvedor de sitemas",
                profile_views: 31,
                connections: 664,
            }
        }
    }
}
</script>

<style scoped>
/* Geral */
.profile {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: var(--third-color);
    position: relative;
    border-radius: 10px;
    overflow: hidden;
}

/* imagens */
.image-background,
.image-profile {
    filter: drop-shadow(0.2rem 0.3rem 0.1rem #00000048);
    height: 90px;
}
.image-profile {
    width: 90px;
    border-radius: 100%;
    position: absolute;
    left: 1rem;
    top: 0.5rem;
}

/* detalhes */
.profile-details{
    padding: 0 1rem;
}
.info{
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
}
/* extra */
.fakeLink {
    cursor: pointer;
}
</style>
<!-- todas as infos de user{} virão do banco -->