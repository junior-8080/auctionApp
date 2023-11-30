"use client";
// import { CacheProvider } from '@chakra-ui/next-js'
import { Provider } from "react-redux";
import { persistor, store } from "@app/redux/store";
// import ClientProvider from '@lib/api/ClientProvider'
import { PersistGate } from "redux-persist/integration/react";
// import Theme from "@core/theme";
import { ReactQueryProvider } from "@/lib/api/ClientProvider";
export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    // <CacheProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ReactQueryProvider>
          {/* <Theme bodyFont={"inherit"} headingFont={"inherit"}> */}
          {children}
          {/* </Theme> */}
        </ReactQueryProvider>
      </PersistGate>
    </Provider>
    // </CacheProvider>
  );
}
