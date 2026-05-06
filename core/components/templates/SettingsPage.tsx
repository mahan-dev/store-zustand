"use client";
import { formData } from "@/constants/settingsPage";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";

import { settingsHandler } from "@/core/helper/settingsPage/settingsPage";

export interface formInterface {
  email: string;
  currentPassword: string;
  newPassword: string;
}

const SettingsPage = () => {
  const [form, setForm] = useState<formInterface>({
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
    await settingsHandler(form);
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
