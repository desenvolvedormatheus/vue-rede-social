const key = 'd6s809afdas89ffdsa7890'

export async function get_users(user = false, pass = false, session_code = false) {
    if(user && pass){
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
    }else if (session_code){
        try{
            const url = `http://localhost/apiRedeSocial/API/api.php?key=${key}&action=get_users&session_code=${session_code}`
    
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
    }else{
     console.log('faltando parametros')   
    }
}
