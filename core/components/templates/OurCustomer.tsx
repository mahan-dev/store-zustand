"use client";

import Image from "next/image";

import { customers } from "@/constants/customers";
import styles from "@/templates/styles/OurCustomer/route.module.css";

const OurCustomer = () => {
  return (
    <section className={styles.container}>
      <h2>Our Partners</h2>
      <div className={styles.slider}>
        <div className={styles["animate-scroll"]}>
          {customers.map((logo, index) => (
            <span key={index}>
              <Image src={logo} alt="" width={100} height={70} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCustomer;
