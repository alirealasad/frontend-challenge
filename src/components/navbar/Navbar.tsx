import { useRef, useState } from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStore } from "stores/store";
import { observer } from "mobx-react-lite"

function Navbar() {
  const panelRef = useRef();
  const [isVisibile, setVisibility] = useState(false);
  const router = useRouter();
  const { cartTotalItems } = useStore().cartStore;

  function toggle() {
    if (isVisibile) {
      panelRef.current.classList.add("hidden");
      setVisibility(false);
    } else {
      panelRef.current.classList.remove("hidden");
      setVisibility(true);
    }
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <nav className="sticky top-0 z-50 relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#1a1a2c] mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <Link href="/">
            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="/images/qogita.png"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="/images/qogita.png"
                  alt="Workflow"
                />
                Qogita
              </div>
            </a>
          </Link>
          <button
            onClick={() => {
              toggle();
            }}
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
          >
            <span className="block relative w-6 h-px rounded-sm bg-white"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          </button>
        </div>
        <div ref={panelRef} className="lg:flex flex-grow items-center hidden">
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="nav-item">
              <Link href="/">
                <a
                  className={classNames(
                    router.asPath === "/"
                      ? "bg-gray-600 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "px-3 py-2 rounded-md flex items-center text-xs uppercase font-bold leading-snug text-white"
                  )}
                >
                  <HomeRoundedIcon />
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/cart">
                <a
                  className={classNames(
                    router.asPath === "/cart"
                      ? "bg-gray-600 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "px-3 py-2 rounded-md flex items-center text-xs uppercase font-bold leading-snug text-white"
                  )}
                >
                  <ShoppingCartRoundedIcon />
                  <span suppressHydrationWarning
className="absolute pt-[0.15rem] text-xs text-center
w-5 h-5 bg-[#f90] text-white font-bold translate-x-1/2 -translate-y-1/2 rounded-full">{cartTotalItems}</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default observer(Navbar)
