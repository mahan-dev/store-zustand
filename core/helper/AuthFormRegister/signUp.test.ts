import { signUpHandler } from "@/helper/AuthFormRegister/signupHandler";

import { toast } from "sonner";
import axios from "axios";

jest.mock("axios");
jest.mock("sonner", () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

const setLoading = jest.fn();
const setForm = jest.fn();

const testEmail = "something@gmail.com";
const testPassword = "testPassword";

describe("signup Validation", () => {
  it("should show error if fields were wrong", async () => {
    await signUpHandler({
      email: "",
      password: "",
      rePassword: "",
      setLoading,
      setForm,
    });
    expect(toast.error).toHaveBeenCalledWith(
      "fields can not be empty !",
      expect.any(Object),
    );

    expect(setLoading).toHaveBeenCalled();
  });

  it("should show error when password or email is less than 4", async () => {
    await signUpHandler({
      email: "something@gmail.com",
      password: "123",
      rePassword: "123",
      setForm,
      setLoading,
    });

    expect(toast.error).toHaveBeenCalledWith(
      "can't be less than 4",
      expect.any(Object),
    );
  });

  it("return error when passwords are not match", async () => {
    await signUpHandler({
      email: testEmail,
      password: testPassword,
      rePassword: "differentPassword",
      setForm,
      setLoading,
    });
    expect(toast.error).toHaveBeenCalledWith(
      "passwords are not match !",
      expect.any(Object),
    );
  });
});
