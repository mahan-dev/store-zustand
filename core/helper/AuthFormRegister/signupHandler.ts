"use client";
import axios from "axios";
import { toast } from "sonner";

interface SignupProps {
  email: string;
  password: string;
  rePassword: string;
}
export const formHandler = async ({
  email,
  password,
  rePassword,
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
    await axios.post("/api/signup", {
      email,
      password,
    });
  } catch (error) {
    toast.error("something went wrong");
  }
};
