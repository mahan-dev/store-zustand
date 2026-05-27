import { itemsCounter } from "@/helper/cardHelper";
import { ModelSchemaTypes } from "@/models/userModel";
import {
  AccItems,
  UserItems,
  UserTransactions,
} from "@/helper/types/transactionsType";

const transactionHandler = (users: ModelSchemaTypes[] | null) => {
  if (!users.length) return;

  const userTransaction: UserTransactions[] = users.flatMap((user) =>
    (user.transactions ?? []).map((item) => {
      return {
        email: user.email,
        transactions: { ...item },
      };
    }),
  );

  const finalUserTransactions = userTransaction.reduce(
    (acc: AccItems[], user: UserItems) => {
      const { email, transactions: product } = user;

      const isUserIndex = acc.findIndex((item) => item.email === email);
      const price = product.price || 0;
      if (isUserIndex !== -1) {
        const userProductId = acc[isUserIndex].transactions.find(
          (item) => item.id === product.id,
        );

        if (userProductId) {
          userProductId.count += 1;
        } else {
          acc[isUserIndex].transactions.push({
            ...product,
            count: 1,
          });
        }

        acc[isUserIndex].totalUser += price;
      } else {
        acc.push({
          email,
          transactions: [{ ...product, count: 1 }],
          totalUser: price,
        });
      }

      return acc;
    },
    [],
  );

  const userTransactionEach: number[] = users
    .filter((user) => !!user.transactions.length)
    .map((item) => {
      return +item.transactions
        .reduce((acc, cur) => acc + cur.price, 0)
        .toFixed(2);
    });

  const total = itemsCounter(userTransaction.map((item) => item.transactions));

  return {
    total,
    totalTransaction: finalUserTransactions,
    userTransactionEach,
  };
};

export { transactionHandler };
