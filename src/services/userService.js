import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8082/api/users";

class UserService{
    async getAllUsers(){
        return await axios.get(USER_API_BASE_URL);
    }
   
   async deleteUserByUserId(userid){
        return await axios.delete(USER_API_BASE_URL + "/" + userid);
    }
    async createUser(user){
    return await axios.post(USER_API_BASE_URL,user);
    }
    async updateUser(user,userid){
        return await axios.put(USER_API_BASE_URL+"/update/"+userid,user);
        }
    async viewUser(userid){
            return await axios.get(USER_API_BASE_URL+"/"+userid);
            }
        
}
export default new UserService();
