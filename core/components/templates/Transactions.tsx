import React from "react";
import { titleFormatter } from "@/helper/titleFormatter";
import { ModelSchemaTypes } from "@/models/userModel";

import styles from "@/templates/styles/transactions/route.module.css";
import { transactionHandler } from "@/helper/transactions/transactionsHelper";
import { emailFormatter } from "@/core/helper/emailFormatter";

interface TransactionProps {
  users: ModelSchemaTypes[];
  email: string;
}

const Transactions = ({ users }: TransactionProps) => {
  const { totalTransaction, userTransactionEach, total } =
    transactionHandler(users);

  return (
    <div className={styles.container}>
      {!!totalTransaction.length ? (
        <div className={styles.container__header}>
          <div className={styles.title__table}>
            <div className="p-2 font-semibold">Title</div>
            <div className="p-2 font-semibold">Category</div>
            <div className="p-2 font-semibold">Price</div>
          </div>

          <div className="divide-y divide-gray-400">
            {totalTransaction.map((item, index) => {
              const { transactions, email } = item;
              return (
                <div className=" divide-y divide-gray-400" key={index}>
                  <div className="p-2 bg-[#9D44B5]/30 text-black">
                    Customer name: {emailFormatter(email)}
                  </div>

                  {transactions.map((transaction, index) => (
                    <div key={index} className={styles.transactions__content}>
                      <div className="p-2 gap-0.5">
                        {titleFormatter(transaction.title)}
                        <span className="ml-3  text-gray-500">
                          x{transaction.count}
                        </span>
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
      ) : (
        <h2 className=" text-red-500 bg-red-200 py-1 text-center  rounded-md">
          Nothing has found
        </h2>
      )}
    </div>
  );
};

export default Transactions;
