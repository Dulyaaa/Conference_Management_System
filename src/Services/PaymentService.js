import axios from 'axios';

class PaymentService{

    addpayment(payment){
        return axios.post('https://icaf-cms-backend.herokuapp.com/payments/addPayment',payment)
    }

}
export default new PaymentService;
