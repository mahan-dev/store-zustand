import { itemsCounter } from "@/helper/cardHelper";
import { ModelSchemaTypes } from "@/models/userModel";
import {
  AccItems,
  UserItems,
  UserTransactions,
} from "@/helper/types/transactionsType";

const transactionHandler = (users: ModelSchemaTypes[]) => {
  console.log(users);
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
// const groupTransactionEmail: Array<{
//   email: string;
//   transactions: ProductDetailTypes[];
// }> = users
//   .filter((user) => !!user.transactions.length)
//   .map((user) => ({
//     email: user.email,
//     transactions: user.transactions,
//     count: 3,
//   }));
// console.log(
//   "🚄 ~ transactionsHelper.ts:34 -> groupTransactionEmail: ",
//   groupTransactionEmail,
// );

// const finalUserTransactions = userTransaction.reduce(
//   (
//     acc: {
//       email: string;
//       transactions: ProductDetailTypes;
//     }[],
//     user,
//   ) => {
//     const product = user.transactions;
//     const email = user.email;
//     const existProduct = acc.findIndex(
//       (item) => item.transactions.id === product.id,
//     );

//     if (existProduct !== -1) {
//       const increaseItem = (acc[existProduct].transactions.count += 1);
//       console.log('👍 ~ transactionsHelper.ts:58 -> email: ', email);

//       acc.push({
//         email,
//         transactions: { ...product, count: increaseItem },
//       });
//     } else {
//       console.log('👍 ~ transactionsHelper.ts:58 -> email: ', email);
//       acc.push({
//         email,
//         transactions: { ...product, count: 1 },
//       });
//     }
//     return acc
//   },
//   [],
// );
