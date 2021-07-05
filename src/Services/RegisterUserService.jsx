import axios from 'axios';

 class RegisterUserService{
    addCustomer(user){
        return axios.post('https://icaf-cms-backend.herokuapp.com/users/addUser',user)
    }

    getUserByIdOptional(cEmail){
        return axios.get('https://icaf-cms-backend.herokuapp.com/users/opUsers'+ '/' +cEmail);
    }

    updateuser(email ,user){
        return  axios.put('https://icaf-cms-backend.herokuapp.com/users/updateUser'+ '/' +email , user)
    }

    deleteUser(email){
        return axios.delete('https://icaf-cms-backend.herokuapp.com/users/delete'+ '/' +email)
    }


}
export default new RegisterUserService();
