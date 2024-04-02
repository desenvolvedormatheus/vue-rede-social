<template>
    <div class="container-news">
        <div class="tittle">
            <h1>Last updates</h1>
            <i class="pi pi-info"></i>
        </div>
        <ul class="news">
            <li v-for="(item, i) in textUpdate" :key="i">
            <i class="pi pi-circle-fill"></i> {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name: 'FeedNews',
            textUpdate: [
                "Now you can create posts that will be visible to all users!",
            ]
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
.news {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    text-align: justify;
    gap: 1rem;
}
.pi-circle-fill{
    color: greenyellow;
    font-size: 0.5rem;
}
</style>