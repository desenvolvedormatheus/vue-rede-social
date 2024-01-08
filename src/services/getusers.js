const key = 'd6s809afdas89ffdsa7890'

export async function get_users(user, pass) {
    try{
        const url = `http://localhost/apiRedeSocial/API/api.php?key=${key}&action=get_users&user=${user}&pass=${pass}`

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