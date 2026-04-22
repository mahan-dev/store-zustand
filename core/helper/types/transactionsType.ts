import { ProductDetailTypes } from "@/core/types/products/types";

interface UserTransactions {
  email: string;
  transactions: ProductDetailTypes;
}
interface AccItems {
  email: string;
  transactions: ProductDetailTypes[];
  totalUser: number;
}

interface UserItems {
  email: string;
  transactions: ProductDetailTypes;
  totalUser: number;
}

export type { UserTransactions, AccItems, UserItems };
