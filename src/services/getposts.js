const url = 'http://localhost/apiRedeSocial/API/api.php?key=d6s809afdas89ffdsa7890&action=get_posts'


fetch(url).then((res) => {
    console.log(res)
})

export async function get_posts() {
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Failed to resposta')
        }
        const data = await response.json();
        return data;
    } catch (error){
        console.error(error);
        throw error;
    }
}