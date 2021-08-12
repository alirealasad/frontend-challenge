import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/store";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import { pageTransition, pageZoom } from "../utils/animations";
import styles from "../styles/product.module.css";
import Button from "components/buttons/Button";
import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function HomePage() {
  const {
    products,
    loadProducts,
    removeSelectedProduct,
    loadProduct,
    selectedProduct,
    totalProducts
  } = useStore().productStore;
  const { totalPage, currentPage, changePage } = useStore().pageStore;
  const {
    addToCart,
    cart,
    removeAllItems,
    cartTotalItems,
  } = useStore().cartStore;
  const {
appLoading
  } = useStore().commonStore;
  const router = useRouter();

  useEffect(async () => {
        // if (totalProducts == 0 ) {
    loadProducts();
        // }
  }, [currentPage]);

  return (
    <>
      <Head>
        <title>qogita</title>
      </Head>
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
                       Added
                    </Button>
                  ) : (
                    <Button variant="secondary" onClick={() => addToCart(product)}>
                     Add To Cart
                    </Button>
                  )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div>
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px content-between"
        >
          {currentPage > 1 ? (
            <a
              onClick={() => {
                changePage(currentPage - 1);
              }}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          ) : (
            <></>
          )}

          {[...Array(totalPage|5).keys()].map((val) => {
            return (
              <a
                onClick={() => {
                  changePage(val + 1);
                }}
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                {val + 1}
              </a>
            );
          })}
          {totalPage > currentPage ? (
            <a
              onClick={() => {
                changePage(currentPage + 1);
              }}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          ) : (
            <></>
          )}
        </nav>
      </div>
      </>
  );
}

export default observer(HomePage);
