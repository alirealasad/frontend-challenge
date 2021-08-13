import { useStore } from "stores/store";
import { observer } from "mobx-react-lite";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function Pagination() {
  const { totalPage, currentPage, changePage } = useStore().pageStore;

  function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

  return(
    <div class="flex flex-col items-center my-12">
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
            <ArrowBackIosIcon />
          </a>
        ) : (
          <></>
        )}

        {[...Array(totalPage).keys()].map((val) => {
          const realVal = val+1;
          return (
            <a
            key={realVal}
              onClick={() => {
                changePage(realVal);
              }}
              className={classNames(
                currentPage === realVal ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600":"bg-white border-gray-300 text-gray-500 hover:bg-gray-50","relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              )}
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
            <ArrowForwardIosIcon />
          </a>
        ) : (
          <></>
        )}
      </nav>
    </div>
  )
}

export default observer(Pagination);
