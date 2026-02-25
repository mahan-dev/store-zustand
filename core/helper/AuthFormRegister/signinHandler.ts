"use client";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

export const signinFormHandler = async ({ email, password }) => {
  const res = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (res?.error) {
    toast.error(res.error, { position: "top-center" });
    return;
  }

  if (res.status === 200) {
    toast.success("successfully loggedIn", { position: "top-center" });
  }
};
