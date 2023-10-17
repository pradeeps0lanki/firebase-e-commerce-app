import { CardElement , useStripe , useElements} from "@stripe/react-stripe-js";
import "./paymentFrom.scss";

const PaymentForm = () => {

  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e)=>{
    e.preventDefault();
    if(!stripe || !elements){
      return;
    }

    


  }


  return (
    <div className="c1">
      <div className="c2">
        <h2 className="mb-3">Credit Card Payment</h2>
        <CardElement />
      </div>
    </div>
  );
};

export default PaymentForm;
