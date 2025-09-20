"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren, useMemo, useState } from "react";
import { GlobalContext } from "../contexts";
export interface IRegisterDevice {
  mode: string;
  identifier: string;
  notificationToken?: string;
}

// Optimized QueryClient for development
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Faster refetching in development
      staleTime:
        process.env.NODE_ENV === "development" ? 1000 * 60 * 5 : 1000 * 60 * 10, // 5 min in dev, 10 min in prod
      gcTime:
        process.env.NODE_ENV === "development"
          ? 1000 * 60 * 10
          : 1000 * 60 * 15, // 10 min in dev, 15 min in prod
      // Reduce unnecessary refetches in development
      refetchOnWindowFocus:
        process.env.NODE_ENV === "development" ? false : true,
      refetchOnReconnect: process.env.NODE_ENV === "development" ? false : true,
    },
    mutations: {
      // Faster retry in development
      retry: process.env.NODE_ENV === "development" ? 1 : 3,
    },
  },
});

const ReactQueryClientProvider: FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<{ [key: string]: any }>({});

  const contextValue = useMemo(() => ({ data, setData }), [data, setData]);
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContext.Provider value={contextValue}>
        {children}
      </GlobalContext.Provider>
    </QueryClientProvider>
  );
};

export default ReactQueryClientProvider;
