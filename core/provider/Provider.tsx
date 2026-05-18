"use client";
import { Toaster } from "@/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ProviderProps {
  children: ReactNode;
}
const Provider = ({ children }: ProviderProps) => {
  const queryClient = new QueryClient();

  return (
    <>
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </SessionProvider>
      <Toaster />
    </>
  );
};

export default Provider;
