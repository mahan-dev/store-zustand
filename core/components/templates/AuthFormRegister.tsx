"use client";
import React, { useState } from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "@/ui/card";
import { Label } from "@/ui/label";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import Link from "next/link";

import axios from "axios";

import styles from "@/templates/styles/signin-signup/route.module.css";

interface AuthFormRegisterProps {
  title: "Sign In" | "Sign Up";
  rePassword: boolean;
}

const AuthFormRegister = ({ title, rePassword: rePass }: AuthFormRegisterProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");

  const signupHandler = async () => {
    await axios.post("/api/signup", {});
  };

  return (
    <Card className={styles.card}>
      <CardHeader className="px-0">
        <CardTitle className={styles.card__title}>{title}</CardTitle>
      </CardHeader>

      <Label htmlFor="email">email</Label>
      <Input id="email" />
      <Label htmlFor="password">password</Label>
      <Input id="password" />
      {rePass && (
        <>
          <Label htmlFor="rePassword">re password</Label>
          <Input id="rePassword" />
        </>
      )}

      <CardFooter>
        <div className={styles["card__footer-container"]}>
          {title === "Sign Up" ? (
            <Link href={"/signin"} className="w-full ">
              have an account ?<Button className="w-full">Signin</Button>
            </Link>
          ) : (
            <Link href={"/signin"} className="w-full ">
              <Button className="w-full">Signin</Button>
            </Link>
          )}

          {title === "Sign In" ? (
            <Link href={"/signup"} className="w-full">
              don&apos;t have an account
              <Button className="w-full">Signup</Button>
            </Link>
          ) : (
            <Link href={"/signup"} className="w-full">
              <Button className="w-full" onClick={signupHandler}>
                Signup
              </Button>
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default AuthFormRegister;
