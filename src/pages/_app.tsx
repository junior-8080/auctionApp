import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {useStore} from "../lib/redux/store";
import {ReactQueryProvider} from "@/lib/api/ClientProvider";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Fragment} from "react";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const store = useStore(pageProps.initialReduxState);

  return (
    <Fragment>
      <Provider store={store}>
        <PersistGate persistor={store.__PERSISTOR} loading={null}>
          {() => (
            <>
              <ReactQueryProvider pageProps={pageProps}>
                <ToastContainer />
                  <Component {...pageProps}/>
              </ReactQueryProvider>
            </>
          )}
        </PersistGate>
      </Provider>
    </Fragment>
  );
}
