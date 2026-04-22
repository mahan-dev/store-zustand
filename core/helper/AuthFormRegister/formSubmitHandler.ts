import { Dispatch, FormEvent, SetStateAction } from "react";
import { signinFormHandler } from "@/helper/AuthFormRegister/signinHandler";
import { signUpHandler } from "@/helper/AuthFormRegister/signupHandler";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface FormProps {
  e: FormEvent;
  form: { email: string; password: string; rePassword: string };
  router: AppRouterInstance;
  title: "Sign In" | "Sign Up";
  setForm: Dispatch<SetStateAction<object>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}
export const formSubmitHandler = async ({
  e,
  form,
  router,
  title,
  setForm,
  setLoading,
}: FormProps) => {
  e.preventDefault();
  const { email, password, rePassword } = form;

  if (title === "Sign In") {
    await signinFormHandler({ email, password, router, setLoading });
  }
  if (title === "Sign Up")
    await signUpHandler({ email, password, rePassword, setForm, setLoading });
};
