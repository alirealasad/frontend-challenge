import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useStore } from "stores/store";
import { Product } from "types/product";
import CartItemButtons from "./CartItemButtons";

interface CartItemDetailsProps {
  item: Product;
}

const CartItemDetails: React.FC<CartItemDetailsProps> = ({ item }) => {
  const { loadProduct } = useStore().productStore;
  const router = useRouter();

  const { gtin, name, recommendedRetailPrice, quantity } = item;

  return (
    <div className="p-3 sm:p-4 flex flex-col w-full">
      <p
        className="line-clamp-2"
      >
        {name}
      </p>
      <div className="flex mt-auto items-baseline pt-2">
        <div className="flex flex-col">
          <b className="mr-1 whitespace-pre-wrap">
            €{(recommendedRetailPrice * quantity)}
          </b>

        </div>
        <CartItemButtons item={item} />
      </div>
    </div>
  );
};

export default observer(CartItemDetails);
