import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import CartItem from "./CartItem";

interface CartItemsProps {}

const CartItems: React.FC<CartItemsProps> = () => {
  const { cart } = useStore().cartStore;

  return (
    <div className="flex flex-col flex-[50%]">
      <div className="space-y-4">
        {cart.map((item) => (
          <CartItem key={item.gtin} item={item} />
        ))}
      </div>
    </div>
  );
};

export default observer(CartItems);
