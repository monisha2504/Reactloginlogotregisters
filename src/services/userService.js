import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8082/api";
class UserService {
  async getAllUsers() {
    return await axios.get(USER_API_BASE_URL + "/users");
  }
  async deleteUserByUserId(userId) {
    return await axios.delete(USER_API_BASE_URL + "/users/" + userId);
  }
  async createUser(user) {
    return await axios.post(USER_API_BASE_URL + "/users/add", user);
  }
  async updateUser(user, userId) {
    return await axios.put(USER_API_BASE_URL + "/users/update/" + userId, user);
  }
  async viewUser(userId) {
    return await axios.get(USER_API_BASE_URL + "/users/" + userId);
  }
  async login(loginentity) {
    return await axios.post(USER_API_BASE_URL + "/login", loginentity)
    .catch(function(error){
      return null;
    });
  }
  async logout(userId) {
    return await axios.get(USER_API_BASE_URL + "/logout/" + userId);
  }
}
export default new UserService();
