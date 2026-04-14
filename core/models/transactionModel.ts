import { model, Model, models, Schema } from "mongoose";
import { ProductDetailTypes } from "@/types/products/types";

interface TransactionInterface {
  transactions: ProductDetailTypes[];
}

export const TransactionsSchema = new Schema<TransactionInterface>({
  transactions: [Object],
});

export const TransactionsModel: Model<TransactionInterface> =
  models.transactions ||
  model<TransactionInterface>("transactions", TransactionsSchema);
