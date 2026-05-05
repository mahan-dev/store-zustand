"use client";
import { formData } from "@/constants/settingsPage";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import axios from "axios";
import { toast } from "sonner";

const SettingsPage = () => {
  const [form, setForm] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: value,
    });
  };
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const { email, currentPassword, newPassword } = form;
    if (email === "" || currentPassword === "" || newPassword === "") {
      toast.error("cannot be empty !", { position: "top-center" });
      return;
    }
    try {
      const res = await axios.patch("/api/password", form);
      console.log("🛠️ ~ SettingsPage.tsx:26 -> res: ", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full flex flex-col justify-center text-[1.4rem] text-[#9D44B5] font-bold">
      <h2 className="text-center">Settings</h2>

      <form action="" onSubmit={submitHandler} className="flex flex-col">
        {formData.map((item) => {
          const { id, name, type } = item;

          return (
            <div key={id} className="mx-12 w-48 mb-4 last:mb-0">
              <label className="mb-1" htmlFor={id}>
                {name}
              </label>

              <Input
                type={type}
                id={id}
                name={name}
                value={form[id]}
                onChange={changeHandler}
              />
            </div>
          );
        })}
        <Button className="mx-auto w-25 cursor-pointer" type="submit">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default SettingsPage;
