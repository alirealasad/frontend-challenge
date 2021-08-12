import { motion } from "framer-motion";
import { Product } from "types/product";
import { errorAnimation } from "utils/animations";
import CartItemDetails from "./CartItemDetails";
import CartItemImage from "./CartItemImage";

interface CartItemProps {
  item: Product;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { gtin, imageUrl, name } = item;

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={errorAnimation}
      className="flex w-full bg-white rounded-lg overflow-hidden
      shadow-md transition-all duration-200 transform hover:scale-105
      hover:shadow-lg"
    >
      <CartItemImage gtin={gtin} imageUrl={imageUrl} name={name} />
      <CartItemDetails item={item} />
    </motion.div>
  );
};

export default CartItem;
