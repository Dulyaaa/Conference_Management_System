import axios from 'axios';

export default axios.create({
    baseURL: "https://icaf-cms-backend.herokuapp.com",
    headers: {
        "Content-type": "application/json"
    }
});
