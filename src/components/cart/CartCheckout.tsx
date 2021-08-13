import Button from "components/buttons/Button";
import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import { errorAnimation } from "utils/animations";
import PaymentIcon from '@material-ui/icons/Payment';

interface CartCheckoutProps {}

const CartCheckout: React.FC<CartCheckoutProps> = () => {
  const { cartTotal, cartTotalItems, cart } = useStore().cartStore;

  return (
    <div
      className="bg-white rounded-lg shadow-md items-start p-6 md:p-8
    flex-[50%] mb-12 md:mt-0"
    >
      <h5 className="font-semibold text-xl">Checkout</h5>
      <p className="text-2xl font-black mt-8 mb-1">Sub-Total: ${cartTotal}</p>
      <p>Number of items: {cartTotalItems}</p>
      <p style={{ opacity: 0.5 }}>
        This price is exclusive of taxes. GST will be added during checkout.
      </p>
      <div className="mt-4">
        <Button
          onClick={() =>{alert("Proceed to Payment")}  }
          variant="secondary"
        >
          <PaymentIcon /> Proceed to Payment
        </Button>
      </div>
    </div>
  );
};

export default observer(CartCheckout);
