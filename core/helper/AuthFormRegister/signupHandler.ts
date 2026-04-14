"use client";
import { useShopStore } from "@/core/store/store";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

interface SignupProps {
  email: string;
  password: string;
  rePassword: string;
  setForm: Dispatch<SetStateAction<object>>;
}
export const signUpHandler = async ({
  email,
  password,
  rePassword,
  setForm,
}: SignupProps) => {
  if (email === "" || password === "" || rePassword === "") {
    toast.error("fields can not be empty !", { position: "top-center" });
    return;
  }

  if (email.length < 4) {
    toast.error("can't be less than 4", { position: "top-center" });
    return;
  }
  if (password !== rePassword) {
    toast.error("passwords are not match !", { position: "top-center" });
    return;
  }
  try {
    const res = await axios.post("/api/signup", {
      email,
      password,
    });

    if (res.status === 200) {
      toast.success("successfully singed up", { position: "top-center" });
      setForm({
        email: "",
        password: "",
        rePassword: "",
      });
    }
  } catch (error) {
    console.log(error);
    toast.error(error, { position: "top-center" });
  }
};
