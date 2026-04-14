"use client";

import { toast } from "sonner";

import axios from "axios";

import { ProductDetailTypes } from "@/types/products/types";

interface PayHandlerProps {
  resetStore: () => void;
  store: ProductDetailTypes[];
}

let todoPosition = {
  position: "top-center" as const,
};

export const payHandler = async ({ resetStore, store }: PayHandlerProps) => {
  if (!navigator.onLine) {
    toast.error("your'e offline ", todoPosition);
    return;
  }

  const res = await axios.patch("/api/transactions", {
    data: store,
  });

  const status = res.status;
  if (status === 200) {
    toast.success("Payment successful", todoPosition);
    resetStore()
  }

  else if (status === 403) {
    console.log("hello");
    toast.error(res.data.error);
  
  } else {
    toast.error("something wen't wrong");
  }
};
