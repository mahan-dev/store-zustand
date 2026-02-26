import { itemsCounter } from "@/helper/cardHelper";
import { titleFormatter } from "@/core/helper/titleFormatter";
import { ModelSchemaTypes } from "@/models/userModel";
import React from "react";
import { ProductDetailTypes } from "@/core/types/products/types";

import styles from "@/templates/styles/transactions/route.module.css";

interface TransactionProps {
  users: ModelSchemaTypes[];
  email: string;
}

const Transactions = ({ users, email }: TransactionProps) => {
  const userTransaction: ProductDetailTypes[] = users.flatMap(
    (user) => user.transactions ?? [],
  );
  const total = itemsCounter(userTransaction);
  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <h3 className={styles.header__title}>Lists</h3>

        <div className={styles.title__table}>
          <div className="p-2 font-semibold">Name</div>
          <div className="p-2 font-semibold">Title</div>
          <div className="p-2 font-semibold">Price</div>
        </div>

        <div className="p-2 border-b border-gray-400">
          Customer name: {email.split("@")[0]}
        </div>
        <div className="divide-y divide-gray-400">
          {users.map(({ transactions }) =>
            transactions?.map((transaction, index) => (
              <div
                key={index}
                className={styles.transactions__content}
              >
                <div className="p-2">{titleFormatter(transaction.title)}</div>
                <div className="p-2">{titleFormatter(transaction.title)}</div>

                <div className="p-2">{transaction.price}$</div>
              </div>
            )),
          )}
        </div>
        <p className="border-t border-gray-400 p-2">Total: {total}$</p>
      </div>
    </div>
  );
};

export default Transactions;
