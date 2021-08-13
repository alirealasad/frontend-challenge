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

  const { gtin, name, recommendedRetailPrice, quantity, brandName } = item;

  return (
    <div className="p-3 sm:p-4 flex flex-col w-full">
      <p
        className="line-clamp-2"
      >
        {name}
      </p>
      <span
        className="py-1 rounded-2xl text-[1rem]
 tracking-[2px] bg-[rgba(26, 26, 44, 0.05)]
  text-[#1a1a2c]"
      >
        {brandName}
      </span>
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
