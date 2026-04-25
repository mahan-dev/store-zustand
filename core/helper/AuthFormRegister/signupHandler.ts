"use client";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

interface SignupProps {
  email: string;
  password: string;
  rePassword: string;
  setForm: Dispatch<SetStateAction<object>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

interface PositionToast {
  position: "top-center";
}

export const signUpHandler = async ({
  email,
  password,
  rePassword,
  setForm,
  setLoading,
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

  setLoading(true);

  try {
    const res = await axios.post("/api/signup", {
      email,
      password,
    });

    if (res.status === 200) {
      toast.success("successfully signed up", { position: "top-center" });
      console.log("hello");
      setForm({
        email: "",
        password: "",
        rePassword: "",
      });
      setLoading(false);
    }
  } catch (error) {
    const errorMessage = error.response.data.error;
    if (error.status === 422) {
      toast.error(errorMessage || "something went wrong", {
        position: "top-center",
      });
    }
  } finally {
    setLoading(false);
  }
};
