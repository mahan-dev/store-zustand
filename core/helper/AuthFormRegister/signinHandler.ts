"use client";
import { signIn, SignInResponse } from "next-auth/react";
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
  let res: SignInResponse | undefined;

  try {
    setLoading(true);
    res = await signIn("credentials", {
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

      return;
    }

    if (res?.status === 200) {
      toast.success("successfully loggedIn", positionToast);
      await new Promise((resolver) => setTimeout(resolver, 1500));
      router.replace("/dashboard");
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
