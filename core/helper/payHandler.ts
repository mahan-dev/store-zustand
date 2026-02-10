"use client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { toast } from "sonner";

interface PayHandlerProps {
  resetStore: () => void;
  router: AppRouterInstance;
}
export const payHandler = async ({ resetStore, router }: PayHandlerProps) => {
  toast.success("Payment successful", { position: "top-center" });
  resetStore();
  await new Promise((resolver) => setTimeout(resolver, 2000));
  router.push("/");
};
