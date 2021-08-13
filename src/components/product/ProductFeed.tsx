import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import Image from "next/image";
import { motion } from "framer-motion";
import { pageTransition, pageZoom } from "utils/animations";
import styles from "styles/product.module.css";
import Button from "components/buttons/Button";
import Pagination from "components/pagination/Pagination";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function ProuctFeed() {
  const {
    products,
    loadProducts,
    removeSelectedProduct,
    loadProduct,
    selectedProduct,
    totalProducts
  } = useStore().productStore;
  const {
    addToCart,
    cart,
    removeAllItems,
    cartTotalItems,
  } = useStore().cartStore;
    const { currentPage} = useStore().pageStore;

  useEffect(async () => {
        // if (totalProducts == 0 ) {
    loadProducts();
        // }
  }, [currentPage]);

  return(
    <>
    <div
      className="flex flex-col items-center sm:grid
    sm:grid-cols-2 lg:grid-cols-3 m-8"
    >
      {products.map((product) => {
        return (
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            key={product.gtin}
            variants={pageZoom}
            transition={pageTransition}
            layout

            className="w-3/4 bg-white rounded-lg shadow-md flex flex-col
          transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
          >
            <motion.div
              layoutId={product.gtin.toString()}
              className={`w-full pb-[75%] relative overflow-hidden
          block rounded-t-lg product__image ${styles.productImage}`}
            >
              <Image
                src={product.imageUrl}
                layout="fill"
                objectFit="contain"
              />
            </motion.div>
            <div className="p-4 w-full flex flex-col justify-between flex-1">
              <span
                className="py-1 px-2 mb-3 rounded-2xl text-[0.5rem]
        uppercase tracking-[2px] bg-[rgba(26, 26, 44, 0.05)]
        text-[#1a1a2c]"
              >
                {product.categoryName}
              </span>
              <span
                className="py-1 px-2 mb-3 rounded-2xl text-[1rem]
         tracking-[2px] bg-[rgba(26, 26, 44, 0.05)]
          text-[#1a1a2c]"
              >
                {product.brandName}
              </span>
              <h6 className="h-16 text-lg line-clamp-3">{product.name}</h6>
              <div className="mt-auto pt-4 flex justify-between items-center">
                <p className="product__price">
                  <b className="text-2xl font-black">
                    €{product.recommendedRetailPrice}
                  </b>
                </p>
                <div className="text-base">
                { cart.find(item => item.gtin === product.gtin)? (
                  <Button variant="secondary" onClick={() => removeAllItems(product.gtin)}>
                    <ShoppingCartIcon /> Added
                  </Button>
                ) : (
                  <Button variant="secondary" onClick={() => addToCart(product)}>
                   <AddShoppingCartIcon /> Add To Cart
                  </Button>
                )}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
    <Pagination/>
    </>
  )

}

export default observer(ProuctFeed)
