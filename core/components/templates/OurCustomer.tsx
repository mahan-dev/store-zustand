"use client";

import Image from "next/image";

import styles from "@/templates/styles/OurCustomer/route.module.css";

import { customers } from "@/constants/customers";

const OurCustomer = () => {
  return (
    <section className={styles.container}>
      <h2>Our Partners</h2>
      <div className={styles.slider}>
        <div className={styles["animate-scroll"]}>
          {customers.map((logo, index) => (
            <Image
              key={`original-${index}`}
              src={logo}
              alt=""
              width={100}
              height={70}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCustomer;
