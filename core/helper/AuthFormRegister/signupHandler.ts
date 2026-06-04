"use client";
import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

interface SignupProps {
  email: string;
  password: string;
  rePassword: string;
  setForm: Dispatch<SetStateAction<object>>;
  setLoading: Dispatch<SetStateAction<boolean>>;

  router: AppRouterInstance;
}

const PositionToast = {
  position: "top-center",
} as const;

export const signUpHandler = async ({
  email,
  password,
  rePassword,
  setForm,
  setLoading,
  router
}: SignupProps) => {
  try {
    if (email === "" || password === "" || rePassword === "") {
      toast.error("fields can not be empty !", PositionToast);
      return;
    }

    if (email.length < 4 || password.length < 4) {
      toast.error("can't be less than 4", PositionToast);
      return;
    }
    if (password !== rePassword) {
      toast.error("passwords are not match !", PositionToast);
      return;
    }

    setLoading(true);

    const res = await axios.post("/api/signup", {
      email,
      password,
    });

    if (res.status === 200) {
      toast.success("successfully signed up", PositionToast);
      await new Promise((resolver) => setTimeout(resolver, 1500));
      router.push("/signin");

      setForm({
        email: "",
        password: "",
        rePassword: "",
      });
      setLoading(false);
    }
  } catch (error) {
    const errorMessage = error.response?.data.error;
    if (error.status === 422) {
      toast.error(errorMessage || "something went wrong", PositionToast);
    }
  } finally {
    setLoading(false);
  }
};
