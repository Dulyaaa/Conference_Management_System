import axios from 'axios';

class PaymentService{

    addpayment(payment){
        return axios.post('http://localhost:8080/payments/addPayment',payment)
    }

}
export default new PaymentService;