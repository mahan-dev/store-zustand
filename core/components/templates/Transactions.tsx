import React from "react";
import { titleFormatter } from "@/helper/titleFormatter";
import { ModelSchemaTypes } from "@/models/userModel";

import styles from "@/templates/styles/transactions/route.module.css";
import { transactionHandler } from "@/helper/transactions/transactionsHelper";
import { emailFormatter } from "@/core/helper/emailFormatter";
import Image from "next/image";
import { Card } from "@/ui/card";

interface TransactionProps {
  users: ModelSchemaTypes[] | null;
  email: string;
}

const Transactions = ({ users }: TransactionProps) => {
  const { totalTransaction, userTransactionEach, total } =
    transactionHandler(users);

  const { transactions, email } =
    !!totalTransaction.length && totalTransaction[0];

  return (
    <div className={styles.container}>
      {!!totalTransaction.length ? (
        <>
          <div className={styles.container__card}>
            {totalTransaction.map((_, index) => (
              <div key={index}>
                <div className="p-2 bg-[#9D44B5]/30 text-black rounded-md">
                  Customer name: {emailFormatter(email)}
                </div>

                {transactions.map((transaction, index) => (
                  <Card key={index} className={styles.transactions__content}>
                    <div className="relative w-12 h-12">
                      <Image
                        src={transaction.image}
                        fill
                        sizes="90vw"
                        alt={transaction.title}
                      />
                    </div>
                    <div className="p-2 gap-0.5 text-[0.9rem] text-gray-700">
                      {titleFormatter(transaction.title)}
                      <span className="ml-3  text-gray-500">
                        x{transaction.count}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 p-2">
                      <span>{titleFormatter(transaction.category)}</span>
                      <span>{transaction.price}$</span>
                      <span>txId: {transaction.uId}</span>
                    </div>
                  </Card>
                ))}
                <div className="p-2">
                  {}
                  Total User: ${userTransactionEach[index]}
                </div>
              </div>
            ))}
          </div>

          <p className=" p-2  bg-red-200 rounded-md">Total Lists: ${total}</p>
        </>
      ) : (
        <h2 className={styles.card__notFound}>Nothing has found</h2>
      )}
    </div>
  );
};

export default Transactions;
