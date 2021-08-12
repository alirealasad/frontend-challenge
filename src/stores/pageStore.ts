import { makeAutoObservable, runInAction } from "mobx";

class PageStore {
  productsCount:number;
  currentPage:number=1;

  constructor() {
    makeAutoObservable(this);
  }

  get totalPage() {
    return this.productsCount/20;
  }

  changePage = (page:number) => {
    this.currentPage = page;
  }

}

  export default PageStore;
