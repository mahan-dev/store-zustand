"use client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { toast } from "sonner";
import type { Position } from "sonner";

interface PayHandlerProps {
  resetStore: () => void;
  router: AppRouterInstance;
}

const position: Position = "top-center";

export const payHandler = async ({ resetStore, router }: PayHandlerProps) => {
  if (!navigator.onLine) {
    toast.error("your'e offline ", { position });
    return;
  }

  toast.success("Payment successful", { position });
  resetStore();
  await new Promise((resolver) => setTimeout(resolver, 2000));
  router.push("/");
};
