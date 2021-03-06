import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import { Product } from "types/product";
import { TrashIcon } from "@heroicons/react/solid";
import RemoveShoppingCartRoundedIcon from "@material-ui/icons/RemoveShoppingCartRounded";

interface CartItemButtonsProps {
  item: Product;
}

const CartItemButtons: React.FC<CartItemButtonsProps> = ({ item }) => {
  const { addToCart, removeFromCart, removeAllItems } = useStore().cartStore;

  const { gtin, quantity } = item;

  return (
    <>
      <div
        className="ml-auto rounded-md overflow-hidden
            bg-[#fafafa] shadow-md whitespace-nowrap"
      >
        <button
          className="bg-[#eee] border-none w-6 h-6
                text-sm transition-all duration-200"
          onClick={() => removeFromCart(gtin)}
        >
          -
        </button>
        <span className="p-2">{quantity}</span>
        <button
          className="bg-[#eee] border-none w-6 h-6
                text-sm transition-all duration-200"
          onClick={() => addToCart(item)}
        >
          +
        </button>
      </div>
      <button
        onClick={() => removeAllItems(gtin)}
        data-for="removeTooltip"
        data-tip="Remove from Cart"
        className="bg-[#dc143c] text-white border-none
        h-6 rounded-md ml-2 px-2"
      >
      <RemoveShoppingCartRoundedIcon style={{ fontSize: 16 }} />
      </button>
    </>
  );
};

export default observer(CartItemButtons);
