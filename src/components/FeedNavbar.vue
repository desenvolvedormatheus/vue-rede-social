<template>
    <div class="container">
        <i class="pi pi-prime"></i>
        <InputGroup class="inputGroup">
            <InputGroupAddon>
                <i class="pi pi-search"></i>
            </InputGroupAddon>
            <InputText placeholder="Search" />
        </InputGroup>
        <Menubar :model="items" />
        <p class="fakeLink" href="">Try Premium for Free</p>    
    </div>
</template>

<script>
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
import Menubar from 'primevue/menubar';

export default {
    data() {
        return {
            name: "FeedNavbar",
            items: ([
                {
                    label: 'Home',
                    icon: 'pi pi-home'
                },
                {
                    label: 'Message',
                    icon: 'pi pi-comments'
                },
                {
                    label: 'My user',
                    icon: 'pi pi-user',
                    items: [
                        {
                            label: 'Settings',
                            icon: 'pi pi-cog'
                        },
                        {
                            label: 'Profile',
                            icon: 'pi pi-user-edit'
                        },
                        {
                            label: 'Log out',
                            icon: 'pi pi-power-off'
                        },
                    ]
                },
            ])
        }
    },
    components: {
        InputGroup,
        InputGroupAddon,
        InputText,
        Menubar,
    },
}
</script>

<style scoped>
.container{
    background: var(--third-color);
    display: flex;
    height: 4rem;
    align-items: center;
    justify-content: space-around;
}
.pi-prime{
    font-size: 2rem;
    margin: 0 1rem;
}
.inputGroup{
    width: 20rem;
    margin-right: auto;
}
.fakeLink{
    color: var(--primary-color);
    padding: 0 0.3rem;
    margin: 0 1.5rem;
    border-left: 0.1rem solid var(--secondary-color);
    cursor: pointer;
}
</style>