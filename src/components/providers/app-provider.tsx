"use client";
import RefreshToken from "@/components/refresh-token";
import { UserType } from "@/types/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Default
// staleTime: 0
// gc: 5 phút (5 * 1000* 60)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

type AppStoreType = {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  user: UserType | undefined;
  setUser: (user?: UserType | undefined) => void;
};

export const useAppStore = create<AppStoreType>()(
  persist(
    (set) => ({
      isAuth: false,
      setIsAuth: (isAuth: boolean) => {
        set({ isAuth });
      },
      user: undefined,
      setUser: (user?: UserType | undefined) => {
        set({ user });
      },
    }),
    {
      name: "app-storage", // tên unique cho storage
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <RefreshToken /> */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
