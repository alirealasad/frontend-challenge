import { makeAutoObservable, runInAction } from "mobx";

class CommonStore {
  appLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAppLoading = (state: boolean) => {
    runInAction(() => {
      this.appLoading = state;
    });
  };
}

export default CommonStore;
