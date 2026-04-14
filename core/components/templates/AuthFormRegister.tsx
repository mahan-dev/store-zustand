"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "@/ui/card";
import { Label } from "@/ui/label";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import Link from "next/link";

import styles from "@/templates/styles/signin-signup/route.module.css";

import { useRouter } from "next/navigation";
import { formSubmitHandler } from "@/helper/AuthFormRegister/formSubmitHandler";

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

  const router = useRouter();

  

  return (
    <form
      onSubmit={async (e: FormEvent) =>
        await formSubmitHandler({ e, form, router, title, setForm })
      }
    >
      <Card className={styles.card}>
        <CardHeader className="px-0">
          <CardTitle className={styles.card__title}>{title}</CardTitle>
        </CardHeader>

        <Label htmlFor="email">email</Label>
        <Input name="email" id="email" onChange={changeHandler} />
        <Label htmlFor="password">password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          onChange={changeHandler}
        />
        {rePass && (
          <>
            <Label htmlFor="rePassword">re password</Label>
            <Input
              type="password"
              name="rePassword"
              id="rePassword"
              onChange={changeHandler}
            />
          </>
        )}

        <CardFooter>
          <div className={styles["card__footer-container"]}>
            {title === "Sign Up" && (
              <div>
                <Button className="w-full cursor-pointer">Sign Up</Button>
                <Link
                  href={"/signin"}
                  className="w-full mt-2 block text-[0.9rem] "
                >
                  have an account ? Signin
                </Link>
              </div>
            )}
            {title === "Sign In" && (
              <div>
                <Button className="w-full cursor-pointer">Sign In</Button>
                <Link
                  href={"/signup"}
                  className="w-full block mt-2 text-[0.9rem]"
                >
                  don&apos;t have an account Signup
                </Link>
              </div>
            )}
          </div>
        </CardFooter>
      </Card>
    </form>
  );
};

export default AuthFormRegister;
