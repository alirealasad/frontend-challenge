import { motion } from "framer-motion";
import Image from "next/image";

interface CartItemImageProps {
  id: number;
  image: string;
  title: string;
}

const CartItemImage: React.FC<CartItemImageProps> = ({ gtin, imageUrl, name }) => {
  return (
    <motion.div
      layoutId={gtin.toString()}
      className="pb-[10%] relative"
      style={{ flex: "flex: 0 0 30%" }}
    >
      <Image
        height="100%"
        width="100%"
        objectFit="contain"
        src={imageUrl}
        alt={name}
        className="absolute p-3 sm:p-4"
      />
    </motion.div>
  );
};

export default CartItemImage;
