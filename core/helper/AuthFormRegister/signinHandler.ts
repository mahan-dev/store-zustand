"use client";
import { signIn } from "next-auth/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";

import { toast } from "sonner";

interface SigninProps {
  email: string;
  password: string;
  router: AppRouterInstance;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

let positionToast = {
  position: "top-center" as const,
};

export const signinFormHandler = async ({
  email,
  password,
  router,
  setLoading,
}: SigninProps) => {
  // if (!email || !password) {
  //   toast.error("please enter a valid information", { position: "top-center" });
  //   setLoading(false);
  //   return;
  // }

  const res = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (res?.error) {
    const errorConnection = res.error.includes(
      "buffering timed out after 10000ms",
    );
    toast.error(
      errorConnection ? "something wen't wrong" : res.error,
      positionToast,
    );
    setLoading(false);
    return;
  }

  if (res?.status === 200) {
    toast.success("successfully loggedIn", positionToast);
    await new Promise((resolver) => setTimeout(resolver, 1500));
    router.replace("/dashboard");
    setLoading(false);
  }
};
