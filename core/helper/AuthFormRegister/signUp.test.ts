import { signUpHandler } from "@/helper/AuthFormRegister/signupHandler";

import { toast } from "sonner";
import axios from "axios";

const toastPosition = {
  position: "top-center",
} as const;

jest.mock("axios");
jest.mock("sonner", () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

const router = {
  push: jest.fn(),
};

const setLoading = jest.fn();
const setForm = jest.fn();
const toastError = toast.error;

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
      router: router as any,
    });
    expect(toastError).toHaveBeenCalledWith(
      "fields can not be empty !",
      expect.objectContaining(toastPosition),
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
      router: router as any,
    });

    expect(toastError).toHaveBeenCalledWith(
      "can't be less than 4",
      expect.objectContaining(toastPosition),
    );
  });

  it("return error when passwords weren't match", async () => {
    await signUpHandler({
      email: testEmail,
      password: testPassword,
      rePassword: "differentPassword",
      setForm,
      setLoading,
      router: router as any,
    });
    expect(toastError).toHaveBeenCalledWith(
      "passwords are not match !",
      expect.objectContaining(toastPosition),
    );
  });

  it("should call axios", async () => {
    (axios.post as jest.Mock).mockResolvedValue({ status: 200 });

    await signUpHandler({
      email: testEmail,
      password: testPassword,
      rePassword: testPassword,
      setForm,
      setLoading,
      router: router as any,
    });

    expect(axios.post).toHaveBeenCalledTimes(1);

    expect(axios.post).toHaveBeenCalledWith("/api/signup", {
      email: testEmail,
      password: testPassword,
    });
  });

  it("should return success when signup successfully", async () => {
    (axios.post as jest.Mock).mockResolvedValue({ status: 200 });
    await signUpHandler({
      email: testEmail,
      password: testPassword,
      rePassword: testPassword,
      setForm,
      setLoading,
      router: router as any,
    });
    expect(setLoading).toHaveBeenCalledWith(false);
  });

  it("should return failed when error happened", async () => {
    (axios.post as jest.Mock).mockRejectedValue({
      status: 422,
    });

    await signUpHandler({
      email: testEmail,
      password: testPassword,
      rePassword: testPassword,
      setForm,
      setLoading,
      router: router as any,
    });

    expect(toastError).toHaveBeenCalledWith(
      "something went wrong",
      expect.objectContaining(toastPosition),
    );
  });
});
