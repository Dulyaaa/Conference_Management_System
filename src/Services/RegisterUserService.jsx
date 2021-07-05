import axios from 'axios';

 class RegisterUserService{
    addCustomer(user){
        return axios.post('http://localhost:8080/users/addUser',user)
    }

    getUserByIdOptional(cEmail){
        return axios.get('http://localhost:8080/users/opUsers'+ '/' +cEmail);
    }

    updateuser(email ,user){
        return  axios.put('http://localhost:8080/users/updateUser'+ '/' +email , user)
    }

    deleteUser(email){
        return axios.delete('http://localhost:8080/users/delete'+ '/' +email)
    }


}
export default new RegisterUserService();
