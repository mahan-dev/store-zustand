"use client";
import { formData } from "@/constants/settingsPage";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@/ui/button";
import styles from "@/templates/styles/settingsPage/route.module.css";

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

  const [reveal, setReveal] = useState({
    currentPassword: false,
    newPassword: false,
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

  const clickHandler = (id: string) => {
    setReveal((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className={styles.container}>
      <h2 className="text-center">Settings</h2>

      <form action="" onSubmit={submitHandler} className="flex flex-col max-lg:mt-12">
        {formData.map((item) => {
          const { id, name, type } = item;

          const isPassword = type === "password";

          const inputType = isPassword
            ? reveal[id as keyof typeof reveal]
              ? "text"
              : "password"
            : type;

          return (
            <div key={id} className={styles.container__form}>
              <label className="mb-1 text-[1.2rem]" htmlFor={id}>
                {name}
              </label>

              <div className={styles.form__input__container}>
                <input
                  className="w-full  outline-0"
                  type={inputType}
                  id={id}
                  name={name}
                  value={form[id]}
                  onChange={changeHandler}
                />
                {type === "password" && (
                  <Button
                    className="w-15"
                    id={id}
                    onClick={() => clickHandler(id)}
                    type="button"
                  >
                    {reveal[id] ? "hide" : "show"}
                  </Button>
                )}
              </div>
            </div>
          );
        })}
        <Button className="mx-auto w-25 cursor-pointer max-lg:mt-12" type="submit">
          Submit
        </Button>
      </form>
    </section>
  );
};



export default SettingsPage;

const FormComponent = () => {
  
}
