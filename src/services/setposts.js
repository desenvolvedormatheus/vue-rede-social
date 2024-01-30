const key = 'd6s809afdas89ffdsa7890'

export async function set_posts(user_id, content) {
    const url = `http://localhost/apiRedeSocial/API/api.php?key=${key}&action=set_post&user_id=${user_id}&content=${content}`
    
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Failed to respost')
        }
        const data = await response.json();
        return data;
    } catch (error){
        console.error(error);
        throw error;
    }
}