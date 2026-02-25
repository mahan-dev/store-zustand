"use client";
import { signIn } from "next-auth/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { toast } from "sonner";

interface SigninProps {
  email: string;
  password: string;
  router: AppRouterInstance;
}

let positionToast = {
  position: "top-center" as const,
};

export const signinFormHandler = async ({ email, password, router }: SigninProps) => {
  const res = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (res?.error) {
    toast.error(res.error, positionToast);
    return;
  }

  if (res?.status === 200) {
    toast.success("successfully loggedIn", positionToast);
    await new Promise((resolver) => setTimeout(resolver, 1500));
    router.replace("/admin");
  }
};
