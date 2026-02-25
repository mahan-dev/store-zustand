"use client";
import { ChangeEvent, useState } from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "@/ui/card";
import { Label } from "@/ui/label";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import Link from "next/link";

import styles from "@/templates/styles/signin-signup/route.module.css";

import { formHandler } from "@/helper/AuthFormRegister/signupHandler";

import { signinFormHandler } from "@/helper/AuthFormRegister/signinHandler";
import { useRouter } from "next/navigation";

interface AuthFormRegisterProps {
  title: "Sign In" | "Sign Up";
  rePassword: boolean;
}

const AuthFormRegister = ({
  title,
  rePassword: rePass,
}: AuthFormRegisterProps) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    rePassword: "",
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const signupHandler = async () => {
    const { email, password, rePassword } = form;

    await formHandler({ email, password, rePassword });
  };

  const router = useRouter();

  const signinHandler = async () => {
    const { email, password } = form;
    await signinFormHandler({ email, password, router });
  };

  return (
    <Card className={styles.card}>
      <CardHeader className="px-0">
        <CardTitle className={styles.card__title}>{title}</CardTitle>
      </CardHeader>

      <Label htmlFor="email">email</Label>
      <Input name="email" id="email" onChange={changeHandler} />
      <Label htmlFor="password">password</Label>
      <Input name="password" id="password" onChange={changeHandler} />
      {rePass && (
        <>
          <Label htmlFor="rePassword">re password</Label>
          <Input name="rePassword" id="rePassword" onChange={changeHandler} />
        </>
      )}

      <CardFooter>
        <div className={styles["card__footer-container"]}>
          {title === "Sign Up" ? (
            <Link href={"/signin"} className="w-full ">
              have an account ?<Button className="w-full">Signin</Button>
            </Link>
          ) : (
            <Button className="w-full" onClick={signinHandler}>
              Signin
            </Button>
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
