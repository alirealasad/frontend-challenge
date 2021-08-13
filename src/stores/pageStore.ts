import { makeAutoObservable, runInAction } from "mobx";

class PageStore {
  productsCount:number=0;
  currentPage:number=1;

  constructor() {
    makeAutoObservable(this);
  }

  get totalPage() {
    if (this.productsCount<=20) {
      return 1;
    } else {
    return this.productsCount/20;
    }
  }

  changePage = (page:number) => {
    this.currentPage = page;
  }

}

  export default PageStore;
