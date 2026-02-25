"use client";
import { Toaster } from "@/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}
const Provider = ({ children }: ProviderProps) => {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
      <Toaster />
    </>
  );
};

export default Provider;
