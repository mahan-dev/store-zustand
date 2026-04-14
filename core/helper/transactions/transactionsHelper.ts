import { ProductDetailTypes } from "@/types/products/types";
import { itemsCounter } from "@/helper/cardHelper";
import { ModelSchemaTypes } from "@/models/userModel";

const transactionHandler = (users: ModelSchemaTypes[]) => {
  const isTransactions = users.filter(
    (transaction) => transaction.transactions.length && transaction,
  );

  const userTransaction: ProductDetailTypes[] = users.flatMap(
    (user) => user.transactions ?? [],
  );
  console.log(userTransaction);

  const userTransactionEach: number[] = users
    .filter((user) => !!user.transactions.length)
    .map((item) => {
      return +item.transactions
        .reduce((acc, cur) => acc + cur.price, 0)
        .toFixed(2);
    });

  const total = itemsCounter(userTransaction);

  const totalTransaction = isTransactions.map((item) => {
    return {
      email: item.email,
      transactions: item.transactions,
    };
  });

  return {
    transactions: isTransactions,
    total,
    totalTransaction,
    userTransactionEach,
  };
};

export { transactionHandler };
