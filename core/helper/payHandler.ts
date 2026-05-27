"use client";

import { toast } from "sonner";

import axios from "axios";

import { ProductDetailTypes } from "@/types/products/types";

import { v4 as uId } from "uuid";

interface PayHandlerProps {
  resetStore: () => void;
  store: ProductDetailTypes[];
}

export let todoPosition = {
  position: "top-center" as const,
};

export const payHandler = async ({ resetStore, store }: PayHandlerProps) => {
  if (!navigator.onLine) {
    toast.error("your'e offline ", todoPosition);
    return;
  }

  const uniqueId = uId();
  const res = await axios.post("/api/transactions", {
    data: store,
    uId: uniqueId,
  });

  const status = res.status;
  if (status === 200) {
    toast.success("Payment successful", todoPosition);
    resetStore();
  } else if (status === 403) {
    toast.error(res.data.error);
  } else {
    toast.error("something wen't wrong");
  }
};
