import { titleFormatter } from "@/helper/titleFormatter";
import { ModelSchemaTypes } from "@/models/userModel";
import React from "react";

import styles from "@/templates/styles/transactions/route.module.css";
import { transactionHandler } from "@/helper/transactions/transactionsHelper";

interface TransactionProps {
  users: ModelSchemaTypes[];
  email: string;
}

const Transactions = ({ users }: TransactionProps) => {
  const { totalTransaction, userTransactionEach, total } =
    transactionHandler(users);

  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <h3 className={styles.header__title}>Lists</h3>

        <div className={styles.title__table}>
          <div className="p-2 font-semibold">Title</div>
          <div className="p-2 font-semibold">Category</div>
          <div className="p-2 font-semibold">Price</div>
        </div>

        <div className="divide-y divide-gray-400">
          {totalTransaction.map((item, index) => {
            const { transactions, email } = item;
            return (
              <div className=" divide-y divide-gray-400">
                <div className="p-2 bg-gray-500 text-white">
                  Customer name: {email.split("@")[0]}
                </div>
                {transactions.map((transaction, index) => (
                  <div key={index} className={styles.transactions__content}>
                    <div className="p-2">
                      {titleFormatter(transaction.title)}
                    </div>
                    <div className="p-2">
                      {titleFormatter(transaction.category)}
                    </div>

                    <div className="p-2">${transaction.price}</div>
                  </div>
                ))}
                <div className="p-2">
                  Total User: ${userTransactionEach[index]}{" "}
                </div>
              </div>
            );
          })}
        </div>

        <p className=" p-2 border-t border-gray-400 bg-red-300">
          Total Lists: ${total}
        </p>
      </div>
    </div>
  );
};

export default Transactions;
