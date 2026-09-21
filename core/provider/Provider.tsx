"use client";
import { Toaster } from "@/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { defaultOptions } from "@/utils/reactQueryOptions";
import { ThemeProvider } from "next-themes";

interface ProviderProps {
  children: ReactNode;
}
const Provider = ({ children }: ProviderProps) => {
  const queryClient = new QueryClient({
    defaultOptions,
  });

  return (
    <>
      <SessionProvider>

        <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        </QueryClientProvider>
      </SessionProvider>
      <Toaster />
    </>
  );
};

export default Provider;
