import { signIn } from "next-auth/react";
import { signinFormHandler } from "@/helper/AuthFormRegister/signinHandler";
import { toast } from "sonner";

jest.mock("next-auth/react");
jest.mock("sonner");

const toastPosition = {
  position: "top-center",
} as const;

const testEmail = "something@gmail.com";
const testPassword = "testPassword";

const setLoading = jest.fn();
const router = {
  replace: jest.fn(),
};

describe("signIn validation", () => {
  it("should show error toast", async () => {
    (signIn as jest.Mock).mockResolvedValue({
      error: "invalid credentials",
    });

    await signinFormHandler({
      email: "something@gmail.com",
      password: "wrong",
      setLoading,
      router: router as any,
    });

    expect(toast.error).toHaveBeenCalledWith(
      "invalid credentials",
      expect.any(Object),
    );

    expect(router.replace).not.toHaveBeenCalled();
  });

  it("should show success toast", async () => {
    (signIn as jest.Mock).mockResolvedValue({
      status: 200,
    });

    await signinFormHandler({
      email: testEmail,
      password: testPassword,
      router: router as any,
      setLoading,
    });

    expect(toast.success).toHaveBeenCalledWith(
      "successfully loggedIn",
      toastPosition,
    );

    const promise = signinFormHandler({
      email: testEmail,
      password: testPassword,
      router: router as any,
      setLoading,
    });

    await jest.advanceTimersByTimeAsync(1500);
    await promise;

    expect(router.replace).toHaveBeenCalledWith("/dashboard");
  });
});
