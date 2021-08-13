import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import { useStore } from "stores/store";
import RouteChange from "./ScrollToTop";

interface AppLayoutProps {}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { appLoading } = useStore().commonStore;
  const loadingBar = useRef<any>(null);

  useEffect(() => {
    if (appLoading) {
      loadingBar.current?.continuousStart();
    } else {
      loadingBar.current.complete();
    }
  }, [appLoading]);

  return (
    <>
      <RouteChange />
      <LoadingBar ref={loadingBar} height={3} color="white" shadow={true} />
      {children}
    </>
  );
};

export default observer(AppLayout);
