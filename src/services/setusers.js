const key = 'd6s809afdas89ffdsa7890'

export async function set_users(user, pass) {
    try{
        const url = `http://localhost/API/api.php?key=${key}&action=set_users&user=${user}&pass=${pass}`

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