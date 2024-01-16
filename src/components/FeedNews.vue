<template>
    <div class="container-news">
        <div class="tittle">
            <h1>Last updates</h1>
            <i class="pi pi-info"></i>
        </div>
        <ul>
            <li>{{ textUpdate }}</li>
            <li>{{ textUpdate }}</li>
            <li>{{ textUpdate }}</li>
            <li>{{ textUpdate }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name: 'FeedNews',
            textUpdate: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, consectetur!"
        }
    }
}
</script>

<style scoped>
.container-news {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--third-color);
    padding: 1rem;
    border-radius: 10px;
    width: 300px;
}
.tittle{
    display: flex;
    align-items: center;
    gap: 1rem;
}
.pi-info{
    background: var(--primary-color);
    padding: 0.3rem;
    border-radius: 50%;
}
</style>