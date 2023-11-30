import React from "react";
import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query";

export const ReactQueryProvider: React.FC<any> = ({ pageProps, children }) => {
  const queryClientRef = React.useRef<any>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          refetchOnWindowFocus: false,
          staleTime: 1000 * 60 * 5,
          cacheTime: 1000 * 60 * 5,
        },
      },
    });
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
};
