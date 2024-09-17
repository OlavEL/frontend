import axios from "axios";


const LoginService = () => {
    
    const login_url="https://localhost:7082/login";
const getAllLogins = async() =>{
    try {
        const response = await axios.get(login_url);
        return response.data;
    } catch (error) {
        console.error("Error fetching bedrift", error);
        return [];
    }
}

const getLoginById = async(id) =>{
    try {
        const response = await axios.get(`${login_url}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching bedrift", error);
        return [];
    }
}

return {
   getAllLogins,
   getLoginById
}
}
export default LoginService;